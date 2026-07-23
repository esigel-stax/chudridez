# Chudridez — three feature additions (paste-in guide)

Three parts, in order: **(1) Installable/offline PWA**, **(2) user-added rides & restaurants**, **(3) TIMS crash counts per route**. Everything below is drop-in — no build step, matches your keyless/localStorage approach.

One shared prerequisite: these snippets need access to your MapLibre map object. If your map isn't already global, find where you create it (`const map = new maplibregl.Map({...})`) and add this right after:

```js
window.map = map;
```

---

## PART 1 — Downloadable app (PWA)

You already have the four files to upload to the repo root alongside `index.html`:

- `manifest.json`
- `sw.js`
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`  *(placeholder tiki icons — swap for your real logo anytime; keep the filenames)*

**Step A — add to `<head>` of index.html:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#1c130d">
<link rel="apple-touch-icon" href="./icon-192.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Chudridez">
```

**Step B — register the service worker. Paste before `</body>`:**

```html
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(console.warn);
  });
}

// Optional custom "Install app" button (Android/desktop Chrome/Edge).
let deferredInstall = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstall = e;
  const btn = document.getElementById('installBtn');
  if (btn) btn.style.display = 'inline-flex';
});
function chudInstall() {
  if (!deferredInstall) return;
  deferredInstall.prompt();
  deferredInstall.userChoice.finally(() => { deferredInstall = null; });
}
</script>
```

Add the button wherever your toolbar lives (hidden until installable):

```html
<button id="installBtn" onclick="chudInstall()" style="display:none">⬇︎ Install app</button>
```

**iPhone/iPad note:** iOS Safari has no install button — it's **Share → Add to Home Screen**. The manifest + apple-touch-icon above make it launch full-screen with your icon.

**Important cache gotcha:** every time you deploy new `index.html` or `data.js`, bump `CACHE_VERSION` in `sw.js` (e.g. `chudridez-v1` → `chudridez-v2`). Otherwise the service worker keeps serving the old cached app. This *replaces* your `?v=` hack — the version bump forces the update cleanly.

**Want a real App Store / Play Store listing later?** Take the deployed PWA URL to **PWABuilder.com** — it generates signed Android (`.aab`) and iOS packages from exactly these files. Or wrap with Capacitor if you want native plugins. The PWA is the foundation for all of those.

---

## PART 2 — User-added rides (GPX import) & restaurants

Self-contained module: injects its own UI, stores everything in `localStorage`, and draws onto your existing map. Paste before `</body>` (after the map exists).

```html
<div id="chud-mine" style="position:fixed;bottom:16px;left:16px;z-index:50;display:flex;gap:8px;flex-wrap:wrap;font-family:inherit">
  <label class="chud-btn">⬆︎ Import GPX
    <input id="chud-gpx" type="file" accept=".gpx" multiple style="display:none">
  </label>
  <button class="chud-btn" onclick="chudAddStopMode()">➕ Add food stop</button>
  <button class="chud-btn" onclick="chudClearMine()">🗑 Clear mine</button>
</div>
<style>
  .chud-btn{background:rgba(46,32,22,.92);color:#f0e4ce;border:1px solid #d6a854;
    border-radius:10px;padding:8px 12px;font-size:14px;cursor:pointer;backdrop-filter:blur(6px)}
  .chud-btn:hover{background:#3a2818}
</style>

<script>
(function(){
  const RIDES_KEY='chud_my_rides', STOPS_KEY='chud_my_stops';
  const load=(k)=>{try{return JSON.parse(localStorage.getItem(k))||[]}catch(e){return[]}};
  const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));

  // ---- GPX parsing ----
  function parseGPX(text){
    const xml=new DOMParser().parseFromString(text,'application/xml');
    const pts=[...xml.querySelectorAll('trkpt, rtept')].map(p=>[
      parseFloat(p.getAttribute('lon')), parseFloat(p.getAttribute('lat'))
    ]).filter(c=>!isNaN(c[0])&&!isNaN(c[1]));
    const name=(xml.querySelector('trk > name, rte > name, metadata > name')||{}).textContent||'My ride';
    // rough distance in miles (haversine)
    let mi=0;
    for(let i=1;i<pts.length;i++){
      const [lo1,la1]=pts[i-1],[lo2,la2]=pts[i];
      const R=3958.8,dLa=(la2-la1)*Math.PI/180,dLo=(lo2-lo1)*Math.PI/180;
      const a=Math.sin(dLa/2)**2+Math.cos(la1*Math.PI/180)*Math.cos(la2*Math.PI/180)*Math.sin(dLo/2)**2;
      mi+=2*R*Math.asin(Math.sqrt(a));
    }
    return {name:name.trim(), coords:pts, miles:+mi.toFixed(1)};
  }

  function drawRide(ride,id){
    if(!window.map) return;
    const sid='myride-'+id;
    if(map.getSource(sid)) return;
    map.addSource(sid,{type:'geojson',data:{type:'Feature',properties:{name:ride.name},
      geometry:{type:'LineString',coordinates:ride.coords}}});
    map.addLayer({id:sid,type:'line',source:sid,
      paint:{'line-color':'#8b5cf6','line-width':4,'line-dasharray':[2,1]}});
    map.on('click',sid,()=>alert(ride.name+'\n'+ride.miles+' mi (your import)'));
  }

  function renderAllRides(){ load(RIDES_KEY).forEach((r,i)=>drawRide(r,i)); }

  function drawStop(stop,id){
    if(!window.map) return;
    const el=document.createElement('div');
    el.textContent='🍴'; el.style.cssText='font-size:22px;cursor:pointer';
    el.title=stop.name;
    new maplibregl.Marker({element:el}).setLngLat([stop.lng,stop.lat])
      .setPopup(new maplibregl.Popup().setHTML(
        '<strong>'+stop.name+'</strong><br>'+(stop.note||'')+'<br><em>your stop</em>'))
      .addTo(map);
  }
  function renderAllStops(){ load(STOPS_KEY).forEach((s,i)=>drawStop(s,i)); }

  // ---- GPX file input ----
  document.getElementById('chud-gpx').addEventListener('change',async(e)=>{
    const rides=load(RIDES_KEY);
    for(const f of e.target.files){
      const ride=parseGPX(await f.text());
      if(ride.coords.length>1){ rides.push(ride); drawRide(ride,rides.length-1); }
    }
    save(RIDES_KEY,rides);
    if(rides.length && window.map){
      const last=rides[rides.length-1].coords;
      map.fitBounds(last.reduce((b,c)=>b.extend(c),
        new maplibregl.LngLatBounds(last[0],last[0])),{padding:60});
    }
    e.target.value='';
  });

  // ---- Add food stop by clicking the map ----
  window.chudAddStopMode=function(){
    if(!window.map){alert('Map not ready');return;}
    map.getCanvas().style.cursor='crosshair';
    const once=(ev)=>{
      map.getCanvas().style.cursor='';
      const name=prompt('Name of this stop?'); if(!name)return;
      const note=prompt('Note / why (optional)')||'';
      const stops=load(STOPS_KEY);
      const stop={name,note,lng:ev.lngLat.lng,lat:ev.lngLat.lat};
      stops.push(stop); save(STOPS_KEY,stops); drawStop(stop,stops.length-1);
    };
    map.once('click',once);
    alert('Click the map where your stop is.');
  };

  window.chudClearMine=function(){
    if(!confirm('Remove all YOUR imported rides and stops? (built-in data stays)'))return;
    localStorage.removeItem(RIDES_KEY); localStorage.removeItem(STOPS_KEY);
    location.reload();
  };

  // draw saved items once the map style is ready
  function boot(){ if(window.map&&map.isStyleLoaded()){renderAllRides();renderAllStops();}
    else setTimeout(boot,400); }
  boot();
})();
</script>
```

What this gives users: **Import GPX** (Strava/RideWithGPS export → drawn as a dashed purple line with auto-computed mileage), **Add food stop** (click map → name/note → 🍴 marker). Everything persists per-browser and survives reloads. It layers on top of your built-in 79 routes / 42 stops without touching `data.js`.

*Optional next step:* let imported rides feed the bucket-list/GPX-export flow you already have — since both use `localStorage`, you'd merge `chud_my_rides` into your existing rides array at load.

---

## PART 3 — TIMS crash counts per route

TIMS (UC Berkeley SafeTREC) has **no free live API** — you export SWITRS crash records once, join them to your routes offline, and bake a `crashCount` (and severity split) into `data.js`. Then display it. Re-run the export maybe once a year when new SWITRS data lands.

### 3a. Get the data
1. Free account at **tims.berkeley.edu** → **Tools → SWITRS GIS Map / Query**.
2. Filter: Bay Area counties, mode = bicycle-involved (or all collisions if you want general corridor risk), date range (e.g. last 5 years).
3. Export as **CSV** with `POINT_X`/`LONGITUDE` and `POINT_Y`/`LATITUDE` columns. Save as `crashes.csv`.

### 3b. Join crashes to routes (run once, locally)
This Python script buffers each route's polyline by ~50 m and counts crashes that fall inside. Export your routes to `routes.json` first (an array of `{id, name, coords:[[lng,lat],...]}` — pull straight from `data.js`).

```python
# pip install shapely pyproj pandas
import json, pandas as pd
from shapely.geometry import LineString, Point
from shapely.ops import transform
from pyproj import Transformer

BUFFER_M = 50  # corridor half-width in meters

to_m   = Transformer.from_crs("EPSG:4326","EPSG:3310",always_xy=True).transform  # CA Albers
routes = json.load(open("routes.json"))
df = pd.read_csv("crashes.csv")
lon = next(c for c in df.columns if c.upper() in ("POINT_X","LONGITUDE","LNG","LON"))
lat = next(c for c in df.columns if c.upper() in ("POINT_Y","LATITUDE","LAT"))
sev = next((c for c in df.columns if "SEVER" in c.upper() or c.upper()=="COLLISION_SEVERITY"), None)

pts = [(transform(to_m, Point(r[lon], r[lat])), (str(r[sev]) if sev else ""))
       for _, r in df.iterrows() if pd.notna(r[lon]) and pd.notna(r[lat])]

out = {}
for rt in routes:
    corridor = transform(to_m, LineString(rt["coords"])).buffer(BUFFER_M)
    hits = [s for (p, s) in pts if corridor.contains(p)]
    # SWITRS severity: 1=fatal, 2=severe injury
    serious = sum(1 for s in hits if s.strip() in ("1", "2"))
    out[rt["id"]] = {"crashCount": len(hits), "seriousCount": serious}
    print(rt["name"], out[rt["id"]])

json.dump(out, open("crash_counts.json", "w"), indent=2)
```

### 3c. Bake into data.js
Merge `crash_counts.json` into your routes. Easiest: at the top of `data.js` (or after your routes array) add the map and a loop:

```js
const CRASH_COUNTS = { /* paste contents of crash_counts.json here */ };
routes.forEach(r => {
  const c = CRASH_COUNTS[r.id];
  if (c) { r.crashCount = c.crashCount; r.seriousCount = c.seriousCount; }
});
```

*(Replace `routes` with whatever your routes array is actually named.)*

### 3d. Show it in the route popup
In the function that builds your route detail HTML, add:

```js
function crashBadge(route){
  if (route.crashCount == null) return '';
  const per = route.crashCount;
  const color = per >= 15 ? '#e86e4a' : per >= 5 ? '#d6a854' : '#7bb661';
  return `<div style="margin-top:6px;font-size:13px">
    <span style="display:inline-block;width:9px;height:9px;border-radius:50%;
      background:${color};margin-right:6px"></span>
    <strong>${per}</strong> reported crashes on this corridor
    ${route.seriousCount ? ` · ${route.seriousCount} serious/fatal` : ''}
    <div style="opacity:.7;font-size:11px">SWITRS via UC Berkeley TIMS · guidance, not a guarantee</div>
  </div>`;
}
// then include ${crashBadge(route)} where you build the popup HTML
```

**Caveats to keep honest:** SWITRS undercounts (only police-reported), the 50 m buffer will catch crashes on parallel/cross streets, and counts aren't exposure-adjusted (a popular route shows more crashes partly because more people ride it). Label it as corridor context, not a per-rider risk score — the badge text above already does this.

---

## Deploy order
1. Upload `manifest.json`, `sw.js`, and the 3 icon PNGs to the repo root.
2. Paste Part 1 head/body snippets into `index.html`.
3. Paste Part 2 module into `index.html`; add `window.map = map;` after map creation.
4. Do the TIMS export + Part 3 when you're ready for real crash data.
5. **Bump `CACHE_VERSION` in `sw.js` on every future deploy.**
