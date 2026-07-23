/* Chudridez region gate — force location-scoped searches to stay in that region.
   Paste inside a <script> in index.html (or save as region-gate.js and add
   <script src="./region-gate.js"></script> AFTER data.js).

   Bounding boxes are [west, south, east, north] in lng/lat. Generous but distinct;
   tweak numbers to taste. */
window.CHUD_REGIONS = {
  marin:       { box: [-122.90, 37.82, -122.42, 38.35],
                 words: ['marin','north bay','sausalito','mill valley','tam','tamalpais','fairfax','point reyes','nicasio','stinson','bolinas','novato','san rafael'] },
  sf_peninsula:{ box: [-122.55, 37.35, -122.10, 37.83],
                 words: ['sf','san francisco','peninsula','pacifica','daly city','san mateo','half moon bay','burlingame','portola','presidio'] },
  east_bay:    { box: [-122.36, 37.55, -121.85, 38.05],
                 words: ['east bay','oakland','berkeley','richmond','orinda','moraga','hayward','fremont','diablo','castro valley'] },
  south_bay:   { box: [-122.20, 37.18, -121.65, 37.52],
                 words: ['south bay','san jose','santa clara','sunnyvale','cupertino','saratoga','los gatos','milpitas'] },
  santa_cruz:  { box: [-122.32, 36.95, -121.85, 37.30],
                 words: ['santa cruz','santa cruz mtns','santa cruz mountains','skyline','soquel','felton','boulder creek','summit'] }
};

// Detect a region key from the raw query, or null if none named.
window.chudDetectRegion = function (query) {
  const q = ' ' + (query || '').toLowerCase() + ' ';
  for (const key in CHUD_REGIONS) {
    if (CHUD_REGIONS[key].words.some(w => q.includes(' ' + w))) return key;
  }
  return null;
};

// Is a [lng, lat] point inside a region's box?
window.chudInRegion = function (lng, lat, key) {
  const b = CHUD_REGIONS[key] && CHUD_REGIONS[key].box;
  if (!b) return true;
  return lng >= b[0] && lng <= b[2] && lat >= b[1] && lat <= b[3];
};

/* Filter any array of items to a region. `getLngLat` tells it how to read
   coordinates from YOUR item shape — adjust the two accessors below to match
   your data (e.g. item.lng/item.lat, item.coords[0], or item.geometry.coordinates). */
window.chudFilterToRegion = function (items, query, getLngLat) {
  const key = chudDetectRegion(query);
  if (!key) return items;                       // no region named → show all (current behavior)
  getLngLat = getLngLat || (it =>
    it.lng != null ? [it.lng, it.lat] :
    (it.geometry ? it.geometry.coordinates :
    (it.coords ? it.coords[0] : [it.longitude, it.latitude])));
  return items.filter(it => {
    const c = getLngLat(it);
    return c && chudInRegion(c[0], c[1], key);
  });
};
