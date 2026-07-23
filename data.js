/* Bay Area Cycling + Food map data
 * Coordinates are APPROXIMATE (plotted from route waypoints & town locations)
 * — good enough to recognize the route/marker, not survey-grade.
 * Always verify turn-by-turn geometry against the linked RideWithGPS/Strava route.
 *
 * Safety ratings are QUALITATIVE, informed by UC Berkeley TIMS / California SWITRS
 * collision data plus corridor risk research (traffic volume, speed, shoulder,
 * blind curves, documented cyclist crashes). They are guidance, not guarantees.
 */

window.SAFETY = {
  safer:   { label: "Safer",       color: "#1a9850", note: "Low traffic / shoulder or car-free / heavy cyclist presence" },
  moderate:{ label: "Moderate",    color: "#f0a020", note: "Popular but some busy or shoulderless segments" },
  caution: { label: "Use caution", color: "#d73027", note: "High speed, no shoulder, blind curves, or documented cyclist crashes" }
};

window.ROUTES = [
  {
    name: "Paradise Loop (Tiburon)",
    region: "Marin / North Bay",
    miles: "18 (≈40 from SF)", elev: 700, difficulty: "Moderate", safety: "safer",
    why: "The quintessential mellow Marin social ride — constant Bay views of Angel Island & the SF skyline, flat-to-rolling, cafe stops in Tiburon.",
    safetyNote: "Paradise Dr is low-traffic but narrow & winding (blind curves on descents). ~200 riders on a Sunday — strong safety-in-numbers effect.",
    url: "https://ridewithgps.com/routes/29109527",
    path: [[37.925,-122.527],[37.918,-122.505],[37.905,-122.485],[37.897,-122.474],[37.887,-122.478],[37.873,-122.457],[37.905,-122.510],[37.925,-122.527]]
  },
  {
    name: "Mt. Tam — Alpine Dam & Seven Sisters",
    region: "Marin / North Bay",
    miles: "33–40", elev: 4400, difficulty: "Hard–Very hard", safety: "caution",
    why: "Marin's crown-jewel climbing loop — redwoods, Alpine Lake, and the famous 'Seven Sisters' undulating ridge with sweeping ocean/bay panoramas.",
    safetyNote: "Low traffic but narrow, no shoulder, technical fast descents past Alpine Dam (tight hairpins, damp/mossy pavement in shade).",
    url: "https://pjammcycling.com/climb/350.Mt.%20Tam%20via%20Alpine%20Dam",
    path: [[37.987,-122.589],[37.960,-122.615],[37.945,-122.630],[37.918,-122.617],[37.902,-122.607],[37.929,-122.580],[37.987,-122.589]]
  },
  {
    name: "Point Reyes — Marshall Wall Loop",
    region: "Marin / North Bay",
    miles: "40–45", elev: 2700, difficulty: "Moderate–Hard", safety: "moderate",
    why: "Iconic West Marin ride — Tomales Bay coastline, rolling dairy-country backroads, and the punchy Marshall Wall climb. Great food in Point Reyes Station.",
    safetyNote: "Hwy 1 along the bay has moderate traffic & narrow shoulder — take the lane on blind curves. Inland valley roads are near-zero traffic. Coastal wind & fog.",
    url: "https://ridewithgps.com/routes/898833",
    path: [[38.068,-122.807],[38.120,-122.860],[38.163,-122.888],[38.155,-122.820],[38.150,-122.775],[38.115,-122.740],[38.065,-122.700],[38.070,-122.760],[38.068,-122.807]]
  },
  {
    name: "Nicasio / Cheese Factory Loop",
    region: "Marin / North Bay",
    miles: "30–35", elev: 1800, difficulty: "Moderate", safety: "safer",
    why: "A quieter, gentler alternative to Point Reyes — pastoral reservoir & valley scenery, the classic Cheese Factory rest stop, and beloved smooth pavement on Lucas Valley Rd.",
    safetyNote: "Nicasio Valley Rd & Lucas Valley Rd are low-traffic and cyclist-loved. Sir Francis Drake carries more traffic but has shoulders in stretches.",
    url: "https://marinbike.org/ride-marin/point-reyes-loop/",
    path: [[37.987,-122.589],[38.010,-122.620],[38.015,-122.650],[38.045,-122.700],[38.062,-122.698],[38.070,-122.720],[38.115,-122.660],[38.070,-122.620],[37.987,-122.589]]
  },
  {
    name: "Marin Headlands / Hawk Hill (from SF)",
    region: "SF + Peninsula",
    miles: "18", elev: 2000, difficulty: "Moderate–Hard", safety: "moderate",
    why: "The most scenic short ride from SF — the Golden Gate crossing plus the punchy Conzelman/Hawk Hill climb delivering the postcard Golden Gate view.",
    safetyNote: "GGB bike path is crowded with tourists (walk-speed zones); Conzelman is one-way uphill for cars. Fog, wind, cold descents. Bunker Rd tunnel bike signal.",
    url: "https://ridewithgps.com/routes/2145313",
    path: [[37.808,-122.466],[37.819,-122.478],[37.834,-122.480],[37.826,-122.499],[37.826,-122.531],[37.833,-122.524],[37.836,-122.500],[37.819,-122.478],[37.808,-122.466]]
  },
  {
    name: "Kings Mtn — Tunitas Creek — Pescadero",
    region: "SF + Peninsula",
    miles: "48", elev: 4500, difficulty: "Very hard", safety: "moderate",
    why: "The definitive Peninsula epic — redwood-canyon climbing on Tunitas Creek, coastal Hwy 1, Pescadero bakery stop, and the classic Kings Mountain descent.",
    safetyNote: "Tunitas Creek & Stage Rd are near-zero traffic. Hwy 84 through La Honda has commuter/logging traffic; Hwy 1 is fast — use the shoulder. Kings Mtn descent is steep & technical.",
    url: "https://www.strava.com/routes/104571",
    path: [[37.430,-122.254],[37.317,-122.274],[37.256,-122.383],[37.326,-122.383],[37.360,-122.400],[37.371,-122.351],[37.428,-122.263],[37.430,-122.254]]
  },
  {
    name: "Old La Honda — Skyline — West Alpine",
    region: "SF + Peninsula",
    miles: "30–35", elev: 3600, difficulty: "Hard", safety: "caution",
    why: "Old La Honda is the most-ridden climb segment on Strava — the Peninsula benchmark. Redwood switchbacks, ridge views on Skyline, quiet West Alpine descent.",
    safetyNote: "OLH is narrow, one-lane in places with blind double-yellow corners (cars drift into oncoming lane). Skyline (Hwy 35) has documented cyclist fatalities — moderate but fast traffic.",
    url: "https://ridewithgps.com/routes/5862507",
    path: [[37.430,-122.254],[37.401,-122.256],[37.377,-122.298],[37.339,-122.336],[37.325,-122.310],[37.290,-122.290],[37.317,-122.274],[37.430,-122.254]]
  },
  {
    name: "Portola Valley Loop ('The Loop')",
    region: "SF + Peninsula",
    miles: "16–17", elev: 850, difficulty: "Moderate", safety: "safer",
    why: "The Peninsula's everyday training loop — smooth pavement, gentle rolling terrain, tree-lined backroads. The default spin for Stanford/Menlo riders.",
    safetyNote: "Alpine Rd near Sand Hill has traffic but wide bike lanes; Portola Rd is calmer with bike lanes. Nearby Cañada Rd is car-free Sundays 9am–3pm.",
    url: "https://www.strava.com/routes/104584",
    path: [[37.443,-122.171],[37.421,-122.210],[37.430,-122.254],[37.384,-122.235],[37.372,-122.220],[37.410,-122.198],[37.443,-122.171]]
  },
  {
    name: "Three Bears Loop (Orinda / Briones)",
    region: "East Bay",
    miles: "20–25", elev: 1600, difficulty: "Moderate", safety: "moderate",
    why: "The East Bay's signature loop — named for its three hills (Mama, Papa, Baby Bear). Reservoir views, Briones scenery, and a rite-of-passage social ride.",
    safetyNote: "San Pablo Dam Rd is the busiest leg (moderate-heavy traffic, bike lane). Alhambra Valley & Bear Creek legs are quiet and rural. Watch fast descents.",
    url: "https://bayareabikerides.net/the-three-bears/",
    path: [[37.878,-122.184],[37.900,-122.199],[37.925,-122.225],[37.960,-122.255],[37.945,-122.220],[37.925,-122.190],[37.905,-122.205],[37.878,-122.184]]
  },
  {
    name: "Mt. Diablo (South Gate up / North down)",
    region: "East Bay",
    miles: "30–32", elev: 3800, difficulty: "Very hard", safety: "moderate",
    why: "The premier East Bay climb & Tour of California legend — steady ~11-mi ascent with the infamous final 'Wall' (~15%). Huge summit panoramas across the whole Bay.",
    safetyNote: "67 new cyclist turnouts (2024) let cars pass. Narrow roads with weekend tourist traffic; fast exposed descents. Check parks.ca.gov for maintenance closures.",
    url: "https://pjammcycling.com/climb/331.Mt.%20Diablo%20-%20South%20Gate",
    path: [[37.821,-121.999],[37.828,-121.981],[37.855,-121.964],[37.869,-121.937],[37.881,-121.914],[37.900,-121.930],[37.913,-121.947],[37.902,-122.000],[37.821,-121.999]]
  },
  {
    name: "Calaveras Road / Sunol Loop",
    region: "East Bay",
    miles: "40", elev: 3000, difficulty: "Hard", safety: "moderate",
    why: "A South/East Bay favorite — the shaded, winding Calaveras Rd along the reservoir with lush green hills and blue water. Best early on weekend mornings.",
    safetyNote: "Serene early weekends, but navigation apps now divert I-680 overflow onto Calaveras. Niles Canyon Rd has fast traffic & limited shoulder — ride single file, hi-vis.",
    url: "https://ridewithgps.com/routes/41429052",
    path: [[37.594,-121.887],[37.520,-121.835],[37.480,-121.820],[37.443,-121.816],[37.450,-121.865],[37.578,-121.930],[37.594,-121.887]]
  },
  {
    name: "Palomares Road Loop",
    region: "East Bay",
    miles: "28–32", elev: 2000, difficulty: "Moderate", safety: "moderate",
    why: "Palomares is a beloved quiet, tree-lined climb/descent connecting Niles Canyon to Castro Valley — a low-traffic escape that pairs naturally with Calaveras.",
    safetyNote: "Palomares itself is low-traffic & winding (watch gravel/blind corners on the descent). The Niles Canyon connector carries heavier/faster traffic.",
    url: "https://ridewithgps.com/routes/41429052",
    path: [[37.594,-121.887],[37.577,-121.970],[37.575,-121.985],[37.615,-122.010],[37.694,-122.037],[37.680,-121.960],[37.662,-121.877],[37.594,-121.887]]
  },
  {
    name: "Mt. Hamilton (Lick Observatory)",
    region: "South Bay",
    miles: "37 (out & back)", elev: 4800, difficulty: "Very hard", safety: "caution",
    why: "The Bay Area's biggest single climb & a Tour of California icon — a uniquely steady grade with ~365 turns to a summit observatory. A bucket-list ride.",
    safetyNote: "Two-lane road, low but fast traffic, ~365 blind curves — the long descent demands caution. No services between San Jose and the summit; carry food/water.",
    url: "https://pjammcycling.com/climb/334.Mt.%20Hamilton%20West",
    path: [[37.375,-121.815],[37.372,-121.790],[37.365,-121.720],[37.345,-121.680],[37.343,-121.660],[37.343,-121.643],[37.343,-121.660],[37.345,-121.680],[37.365,-121.720],[37.372,-121.790],[37.375,-121.815]]
  },
  {
    name: "Uvas & Chesbro Reservoirs (Morgan Hill)",
    region: "South Bay",
    miles: "21", elev: 1000, difficulty: "Moderate", safety: "safer",
    why: "The classic scenic South Bay backcountry spin — oak-dotted rolling foothills, two reservoirs, and a mellow-but-pretty loop with a real backcountry feel close to town.",
    safetyNote: "Uvas Rd, Oak Glen & Watsonville Rd are low-traffic rural roads — generally calm and cyclist-friendly. Watch occasional fast local drivers and rough pavement.",
    url: "https://www.bikemap.net/en/r/4323318/",
    path: [[37.130,-121.654],[37.140,-121.700],[37.115,-121.730],[37.100,-121.740],[37.078,-121.735],[37.088,-121.680],[37.130,-121.654]]
  },
  {
    name: "Hwy 9 — Saratoga Gap — Skyline",
    region: "South Bay",
    miles: "28–32", elev: 3200, difficulty: "Hard", safety: "caution",
    why: "The signature Santa Cruz Mountains climbing loop for the South Bay — steady Hwy 9 climb to Saratoga Gap (a legendary cyclist meetup), ridge riding on Skyline, fun return through Los Gatos.",
    safetyNote: "Hwy 9 is a busy two-lane climb with tight switchbacks & moderate car/motorcycle traffic — take the lane on blind corners; the descent is technical.",
    url: "https://ridewithgps.com/regions/north_america/us/1040-morgan-hill-california-usa",
    path: [[37.264,-122.023],[37.275,-122.080],[37.298,-122.132],[37.245,-121.995],[37.205,-121.985],[37.185,-121.990],[37.226,-121.980],[37.250,-122.010],[37.264,-122.023]]
  },
  {
    name: "Grizzly Peak – Skyline – Redwood – Pinehurst Loop",
    region: "East Bay",
    miles: "34", elev: 3300, difficulty: "Hard", safety: "moderate",
    why: "The definitive East Bay hills ridgeline ride — sweeping bay/ocean views on Grizzly Peak and quiet redwood-shaded climbing on Pinehurst and Redwood.",
    safetyNote: "Grizzly Peak/Tunnel carry moderate car and heavy cyclist traffic with mostly good shoulder; Pinehurst is narrow one-lane with blind curves and gravel — descend cautiously.",
    url: "https://ridewithgps.com/routes/9489051",
    path: [[37.858,-122.238],[37.881,-122.215],[37.85,-122.196],[37.833,-122.18],[37.812,-122.182],[37.84,-122.19],[37.868,-122.212],[37.858,-122.238]]
  },
  {
    name: "Wildcat Canyon Road Loop (Tilden – Richmond)",
    region: "East Bay",
    miles: "28", elev: 2400, difficulty: "Moderate", safety: "moderate",
    why: "A quiet, bucolic canyon descent through Tilden and Wildcat Canyon Regional Park with far fewer cars than the ridge roads.",
    safetyNote: "Upper Wildcat is very low traffic; the lower section near Richmond/El Sobrante has more traffic and no shoulder. Watch potholes and cattle guards.",
    url: "https://ridewithgps.com/routes/10826474",
    path: [[37.892,-122.257],[37.898,-122.243],[37.925,-122.28],[37.946,-122.3],[37.925,-122.27],[37.881,-122.215],[37.892,-122.257]]
  },
  {
    name: "Morgan Territory Road (Clayton – Livermore)",
    region: "East Bay",
    miles: "50", elev: 3000, difficulty: "Hard", safety: "moderate",
    why: "A nearly traffic-free, roller-coaster one-lane climb over the Diablo Range foothills — one of the East Bay's most beloved quiet climbs.",
    safetyNote: "Single-lane pavement with blind corners, steep pitches to 14%, occasional gravel and cattle. Almost no cars, but be ready for oncoming traffic in your lane.",
    url: "https://ridewithgps.com/routes/36024103",
    path: [[37.941,-121.936],[37.9,-121.85],[37.82,-121.8],[37.76,-121.74],[37.72,-121.77],[37.78,-121.82],[37.941,-121.936]]
  },
  {
    name: "Mines Road to The Junction & Del Puerto Canyon",
    region: "East Bay",
    miles: "53 (out & back) / 85 pt-to-pt", elev: 3300, difficulty: "Very hard", safety: "moderate",
    why: "A legendary remote epic through the Diablo Range — silence, birds of prey, and the iconic Junction Cafe midpoint.",
    safetyNote: "Extremely remote with no services or water except The Junction; narrow rough road, occasional ranch trucks and motorcycles. Carry everything you need.",
    url: "https://ridewithgps.com/routes/107546",
    path: [[37.65,-121.73],[37.55,-121.6],[37.38,-121.5],[37.45,-121.35],[37.47,-121.27],[37.47,-121.13]]
  },
  {
    name: "Patterson Pass / Altamont Loop",
    region: "East Bay",
    miles: "32", elev: 2100, difficulty: "Hard", safety: "caution",
    why: "A steep, wind-swept classic over the golden Altamont hills past wind turbines — a longtime race and training staple.",
    safetyNote: "Patterson Pass is narrow with a steep, rough, blind-cornered west side and strong crosswinds; Altamont crossings have fast traffic near I-580.",
    url: "https://ridewithgps.com/routes/236344",
    path: [[37.68,-121.72],[37.7,-121.63],[37.7,-121.58],[37.72,-121.6],[37.73,-121.65],[37.72,-121.7],[37.68,-121.72]]
  },
  {
    name: "Mt. Hamilton via San Antonio Valley (from Livermore)",
    region: "East Bay",
    miles: "90 (pt-to-pt)", elev: 7500, difficulty: "Very hard", safety: "caution",
    why: "The 'back way' up Mt. Hamilton — a huge, remote day linking The Junction to Lick Observatory, a bucket-list East Bay/South Bay epic.",
    safetyNote: "Long remote stretches with no water; the final Hamilton descent is technical with switchbacks and possible fog. Carry lights and layers.",
    url: "https://ridewithgps.com/routes/274030",
    path: [[37.65,-121.73],[37.38,-121.5],[37.35,-121.55],[37.345,-121.6],[37.341,-121.643],[37.36,-121.72],[37.37,-121.8]]
  },
  {
    name: "Sierra Road / Felter Loop",
    region: "East Bay",
    miles: "30", elev: 2600, difficulty: "Hard", safety: "moderate",
    why: "The Tour of California's brutal 9.5% signature wall, with a superb quiet Felter Rd descent through the Los Buellis Hills.",
    safetyNote: "Sierra is narrow, no shoulder, exposed and hot; the steep lower ramps (to ~14%) demand low gears. Watch descending traffic on Felter.",
    url: "https://pjammcycling.com/climb/337.Sierra%20Road",
    path: [[37.43,-121.88],[37.4,-121.85],[37.45,-121.79],[37.47,-121.82],[37.48,-121.83],[37.435,-121.87],[37.43,-121.88]]
  },
  {
    name: "Bonny Doon: Pine Flat / Ice Cream Grade Loop",
    region: "Santa Cruz Mtns",
    miles: "37", elev: 3800, difficulty: "Hard", safety: "moderate",
    why: "A quintessential Santa Cruz Mountains loop — steep Bonny Doon out of Panther Beach, then forested, near-empty ridge roads.",
    safetyNote: "Bonny Doon's lower half hits ~9-10%; roads are narrow with no shoulder; Pine Flat and Ice Cream Grade have rough patches and blind corners.",
    url: "https://ridewithgps.com/routes/9883722",
    path: [[36.99,-122.15],[36.995,-122.15],[37.1,-122.12],[37.07,-122.11],[37.05,-122.1],[37.03,-122.13],[37,-122.1],[36.99,-122.15]]
  },
  {
    name: "Highway 236 / Big Basin / Jamison Creek Loop",
    region: "Santa Cruz Mtns",
    miles: "30", elev: 2800, difficulty: "Hard", safety: "caution",
    why: "Deep redwood forest on Hwy 236 through Big Basin plus the wall-steep Jamison Creek climb — reopened to through cyclists since 2022.",
    safetyNote: "Hwy 236 is narrow, twisty, damp and shaded with tourist traffic; Jamison Creek pitches to ~18% and its descent is rough — most ride it as a climb.",
    url: "https://ridewithgps.com/routes/2126847",
    path: [[37.126,-122.122],[37.14,-122.16],[37.172,-122.222],[37.2,-122.16],[37.14,-122.155],[37.1,-122.14],[37.126,-122.122]]
  },
  {
    name: "Eureka Canyon / Corralitos / Highland Way Loop",
    region: "Santa Cruz Mtns",
    miles: "38", elev: 3200, difficulty: "Hard", safety: "moderate",
    why: "A quiet, redwood-canopied climb through Corralitos ranch country, with the beloved Corralitos Market deli at the start/finish.",
    safetyNote: "Ride counter-clockwise — upper Eureka Canyon has potholes and cracks better climbed than descended. Very low traffic but rough surface.",
    url: "https://bestrides.org/eureka-canyon-rd-highland-rd/",
    path: [[36.98,-121.8],[37.08,-121.82],[37.1,-121.87],[37.08,-121.92],[36.99,-121.95],[37,-121.9],[36.985,-121.81],[36.98,-121.8]]
  },
  {
    name: "Mountain Charlie Rd / Old Santa Cruz Hwy Loop",
    region: "Santa Cruz Mtns",
    miles: "34", elev: 3600, difficulty: "Hard", safety: "caution",
    why: "Links five of the range's prime backroads with the classic Summit Store rest stop and a historic single-lane Mountain Charlie climb.",
    safetyNote: "Mountain Charlie is single-lane with off-camber turns, potholes, sand and gravel — climb it (a monitored landslide keeps a temporary lane open; check status). Soquel–San Jose descent is fast.",
    url: "https://ridewithgps.com/routes/24219746",
    path: [[37.226,-121.974],[37.14,-121.97],[37.12,-121.98],[37.1,-122],[37.05,-122.01],[37.08,-121.92],[37.15,-121.97],[37.226,-121.974]]
  },
  {
    name: "Empire Grade / Felton / Zayante Loop",
    region: "Santa Cruz Mtns",
    miles: "35", elev: 3400, difficulty: "Hard", safety: "moderate",
    why: "Long, steady Empire Grade ridge climbing through UCSC forest, with the quiet, winding Zayante Rd as a scenic descent.",
    safetyNote: "Empire Grade's upper section is remote with rough pavement; Zayante is narrow and shaded with blind curves and driveways.",
    url: "https://ridewithgps.com/routes/2126871",
    path: [[37,-122.06],[37.05,-122.09],[37.07,-122.1],[37.051,-122.073],[37.1,-122.05],[37.11,-122.03],[37.03,-122.04],[37,-122.06]]
  },
  {
    name: "Bear Creek Road / Hwy 9 Loop",
    region: "Santa Cruz Mtns",
    miles: "40", elev: 4000, difficulty: "Hard", safety: "moderate",
    why: "A big quiet loop pairing the lightly traveled Bear Creek Rd climb with the classic Hwy 9 corridor through the redwoods.",
    safetyNote: "Bear Creek crosses over Hwy 17 (heavy fast traffic at the interchange); upper Bear Creek is narrow and rough; Hwy 9 has cars but decent sightlines.",
    url: "https://ridewithgps.com/routes/7319540",
    path: [[37.226,-121.974],[37.16,-121.98],[37.15,-122.06],[37.126,-122.122],[37.255,-122.09],[37.256,-122.03],[37.23,-121.99],[37.226,-121.974]]
  },
  {
    name: "Highway 1 Coast: Santa Cruz – Davenport – Swanton",
    region: "Santa Cruz Mtns",
    miles: "35", elev: 1800, difficulty: "Moderate", safety: "moderate",
    why: "A stunning, relatively flat ocean-bluff ride with the Davenport bakery stop and the quiet Swanton Rd inland loop.",
    safetyNote: "Hwy 1 has a decent shoulder but fast traffic and RVs, plus strong afternoon headwinds/crosswinds — ride out early and watch turnout gravel.",
    url: "https://ridewithgps.com/routes/26865622",
    path: [[36.955,-122.02],[36.951,-122.058],[37.01,-122.2],[37.04,-122.23],[37.1,-122.28],[37,-122.15],[36.955,-122.02]]
  },
  {
    name: "Hicks Road / Mt Umunhum",
    region: "South Bay",
    miles: "30", elev: 3200, difficulty: "Very hard", safety: "moderate",
    why: "The South Bay's hardest paved wall — Hicks' brutal ~16% ramps followed by the pristine, car-free Mt Umunhum climb to a panoramic summit.",
    safetyNote: "Hicks' north side opens at ~16%; narrow, curvy, mild traffic. Umunhum Rd above the gate is closed to cars (bikes only) with excellent pavement.",
    url: "https://ridewithgps.com/routes/12647817",
    path: [[37.2,-121.87],[37.18,-121.83],[37.15,-121.87],[37.155,-121.885],[37.156,-121.897],[37.16,-121.83],[37.2,-121.87]]
  },
  {
    name: "Quimby Road / Grant Park Loop",
    region: "South Bay",
    miles: "28", elev: 2600, difficulty: "Very hard", safety: "moderate",
    why: "A relentless wall of 8-11% grades into rural ranchland, ending at Grant County Park — one of the Bay's toughest short climbs.",
    safetyNote: "Very steep, narrow, no shoulder, minimal traffic; the descent (Quimby or Mt Hamilton Rd) is fast with tight corners.",
    url: "https://pjammcycling.com/climb/336.Quimby%20Road",
    path: [[37.37,-121.8],[37.34,-121.8],[37.36,-121.75],[37.34,-121.71],[37.365,-121.76],[37.37,-121.795],[37.37,-121.8]]
  },
  {
    name: "Cañada Rd 'Bicycle Sunday' + Sawyer Camp / Crystal Springs",
    region: "SF + Peninsula",
    miles: "30", elev: 1500, difficulty: "Moderate", safety: "safer",
    why: "On Sundays 9-3 Cañada Rd is closed to cars ('Bicycle Sunday'); pairs with the paved reservoir-side Sawyer Camp Trail for a family-friendly classic.",
    safetyNote: "Cañada is freshly repaved and mostly gentle, and car-free on Bicycle Sundays; Sawyer Camp Trail is a shared multi-use path — expect walkers, keep speed down.",
    url: "https://ridewithgps.com/routes/197340",
    path: [[37.44,-122.26],[37.47,-122.31],[37.51,-122.35],[37.53,-122.36],[37.56,-122.39],[37.58,-122.4]]
  },
  {
    name: "Page Mill Road / West Alpine Loop",
    region: "SF + Peninsula",
    miles: "28", elev: 3300, difficulty: "Hard", safety: "caution",
    why: "The steep, twisting Page Mill climb to Skyline paired with the sinuous West Alpine — a Peninsula rite of passage.",
    safetyNote: "Page Mill is narrow with tight switchbacks, blind corners and moderate traffic; stay on pavement and avoid the closed unpaved lower Alpine Rd trail connector.",
    url: "https://ridewithgps.com/routes/938232",
    path: [[37.4,-122.15],[37.33,-122.19],[37.312,-122.203],[37.3,-122.23],[37.38,-122.21],[37.395,-122.17],[37.4,-122.15]]
  },
  {
    name: "Montebello Rd / Stevens Canyon / Redwood Gulch Loop",
    region: "SF + Peninsula",
    miles: "24", elev: 3000, difficulty: "Very hard", safety: "moderate",
    why: "Montebello is a long, steady 7-8% climb to vineyards and views; Redwood Gulch is a savage short wall — a compact but tough Peninsula favorite.",
    safetyNote: "Montebello is narrow with driveways and mild traffic; Redwood Gulch hits ~15% and is very narrow; Hwy 9 carries cars with a modest shoulder.",
    url: "https://ridewithgps.com/routes/56039",
    path: [[37.3,-122.08],[37.31,-122.1],[37.32,-122.14],[37.28,-122.09],[37.28,-122.11],[37.255,-122.09],[37.29,-122.085],[37.3,-122.08]]
  },
  {
    name: "Hwy 84 La Honda – San Gregorio – Pescadero Coast Loop",
    region: "SF + Peninsula",
    miles: "55", elev: 4500, difficulty: "Hard", safety: "moderate",
    why: "A quintessential coast-side loop linking the La Honda descent, the historic San Gregorio and Pescadero stores, and quiet Stage Rd.",
    safetyNote: "Hwy 84 has fast blind curves through La Honda; the Hwy 1 stretch has traffic and wind; Stage Rd is a peaceful low-traffic alternative.",
    url: "https://ridewithgps.com/routes/562781",
    path: [[37.43,-122.25],[37.32,-122.27],[37.325,-122.38],[37.32,-122.4],[37.255,-122.383],[37.28,-122.4],[37.37,-122.3],[37.43,-122.25]]
  },
  {
    name: "Fairfax-Bolinas 'BoFax' Loop (Alpine Dam / Ridgecrest)",
    region: "Marin / North Bay",
    miles: "33", elev: 3400, difficulty: "Hard", safety: "caution",
    why: "The iconic 'BoFax' climb past Alpine Dam — often carrying more bikes than cars — into the Bolinas Ridge and coast.",
    safetyNote: "Very narrow, no shoulder, with potholes, fissures and loose gravel especially near the dam; low car traffic but tight blind corners on the descent.",
    url: "https://ridewithgps.com/routes/5579030",
    path: [[37.987,-122.589],[37.97,-122.6],[37.93,-122.63],[37.92,-122.63],[37.91,-122.69],[37.9,-122.68],[37.96,-122.61],[37.987,-122.589]]
  },
  {
    name: "Lucas Valley / Big Rock / Nicasio Loop",
    region: "Marin / North Bay",
    miles: "35", elev: 2400, difficulty: "Moderate", safety: "moderate",
    why: "A beautiful wooded climb to Big Rock past Skywalker Ranch, into the pastoral Nicasio valley — a Marin staple.",
    safetyNote: "Lucas Valley Rd has no shoulder and moderate commute traffic on the east end; the redwood descent to Nicasio is fast with tight corners.",
    url: "https://ridewithgps.com/routes/3638824",
    path: [[38.03,-122.53],[38.06,-122.63],[38.06,-122.7],[38.07,-122.72],[38.02,-122.7],[38.01,-122.58],[38.03,-122.53]]
  },
  {
    name: "Point Reyes Lighthouse Out-and-Back",
    region: "Marin / North Bay",
    miles: "60", elev: 4000, difficulty: "Hard", safety: "moderate",
    why: "A wild, windswept ride to the westernmost tip of Marin through the Point Reyes National Seashore ranches — freshly repaved to the lighthouse.",
    safetyNote: "Constant rollers with pitches to ~10%; ferocious wind and fog; avoid summer weekends (heavy park traffic); no shoulder — watch for elk and cattle.",
    url: "https://ridewithgps.com/routes/3471087",
    path: [[38.07,-122.81],[38.1,-122.85],[38.07,-122.93],[38.03,-122.96],[38.01,-122.99],[37.996,-123.019],[38.01,-122.99],[38.07,-122.93],[38.07,-122.81]]
  },
  {
    name: "Coleman Valley Road (Sonoma Coast) Loop",
    region: "Marin / North Bay",
    miles: "30", elev: 3000, difficulty: "Hard", safety: "moderate",
    why: "One of Sonoma's most scenic climbs — pastures give way to a jaw-dropping open Pacific descent to Hwy 1.",
    safetyNote: "Coleman Valley averages ~10% with pitches into the teens; no shoulder but minimal traffic; the coast descent is exposed and windy.",
    url: "https://ridewithgps.com/routes/35000858",
    path: [[38.41,-122.95],[38.42,-122.99],[38.42,-123.02],[38.37,-123.07],[38.35,-123.05],[38.4,-122.98],[38.41,-122.95]]
  },
  {
    name: "Trinity Road / Oakville Grade (Napa – Sonoma)",
    region: "Marin / North Bay",
    miles: "28", elev: 3200, difficulty: "Very hard", safety: "caution",
    why: "Links two of wine country's toughest climbs — the steady Trinity ridge and the brutal 13%+ Oakville Grade wall, with the Oakville Grocery stop.",
    safetyNote: "Both roads are narrow, steep and rough with blind corners; Oakville Grade's descent is very steep — brake carefully; some vineyard-tour traffic.",
    url: "https://ridewithgps.com/routes/1649798",
    path: [[38.365,-122.51],[38.4,-122.48],[38.42,-122.44],[38.43,-122.42],[38.43,-122.4],[38.39,-122.47],[38.365,-122.51]]
  },
  {
    name: "Chileno Valley – Tomales – Dillon Beach Loop",
    region: "Marin / North Bay",
    miles: "55-62", elev: 3900, difficulty: "Moderate", safety: "moderate",
    why: "Chileno Valley Rd is one of the loveliest, quietest cycling roads in the state — rolling dairy country, then a spur to the dunes and oyster shacks of Dillon Beach with a Route One Bakery stop in Tomales.",
    safetyNote: "Very low traffic on Chileno Valley/Marshall-Petaluma; narrow lanes, no shoulder, cattle guards and blind rollers. Dillon Beach Rd descent is short and steep; faster traffic on the Tomales-Petaluma return.",
    url: "https://ridewithgps.com/routes/36646775",
    path: [[38.232,-122.636],[38.19,-122.7],[38.207,-122.8],[38.246,-122.905],[38.251,-122.964],[38.317,-122.936],[38.28,-122.75],[38.232,-122.636]]
  },
  {
    name: "Napa Silverado Trail (Napa ↔ Calistoga)",
    region: "Marin / North Bay",
    miles: "50 (out & back)", elev: 700, difficulty: "Moderate", safety: "moderate",
    why: "The classic wine-country cruise — a nearly flat, fast, vineyard-lined alternative to jammed Hwy 29, running the length of the valley floor past Stags Leap and Rutherford.",
    safetyNote: "Moderate-to-busy tourist and winery traffic on weekends; mostly a decent shoulder/bike lane that narrows near intersections. Flat, so no real descents — main hazard is distracted drivers and car doors near tasting rooms.",
    url: "https://ridewithgps.com/routes/21301284",
    path: [[38.316,-122.281],[38.4,-122.31],[38.45,-122.35],[38.505,-122.42],[38.578,-122.575]]
  },
  {
    name: "Mt. Veeder / Dry Creek Road Loop (Napa)",
    region: "Marin / North Bay",
    miles: "22-26", elev: 2200, difficulty: "Hard", safety: "moderate",
    why: "A 'secret jewel' of wine-country climbing — shaded, forested switchbacks through the southern Mayacamas, best in summer heat thanks to the tree canopy.",
    safetyNote: "Low traffic but narrow one-lane sections with blind corners; Mt. Veeder from Dry Creek starts at a steep ~10% pitch. Rough pavement in spots; watch gravel on the descent and carry your own supplies.",
    url: "https://ridewithgps.com/routes/3546796",
    path: [[38.3,-122.33],[38.33,-122.4],[38.42,-122.43],[38.4,-122.41],[38.36,-122.42],[38.3,-122.33]]
  },
  {
    name: "Howell Mountain / Angwin / Ink Grade Loop (Napa)",
    region: "Marin / North Bay",
    miles: "24-28", elev: 2600, difficulty: "Hard", safety: "moderate",
    why: "A quiet up-valley classic climbing Deer Park/Old Howell Mountain Rd through tiny Angwin, then looping back down the shaded Ink Grade — big vineyard views with almost no cars.",
    safetyNote: "Very light traffic; the Ink Grade descent is narrow, steep and shaded with damp/mossy patches and blind switchbacks — descend with care. No services once above Angwin.",
    url: "https://pjammcycling.com/climb/368.Old%20Howell%20Mountain%20Road",
    path: [[38.505,-122.47],[38.51,-122.45],[38.575,-122.453],[38.6,-122.42],[38.56,-122.49],[38.53,-122.46],[38.505,-122.47]]
  },
  {
    name: "Cavedale Road (Sonoma) — Glen Ellen Loop",
    region: "Marin / North Bay",
    miles: "17", elev: 2350, difficulty: "Hard", safety: "caution",
    why: "A brutal, beautiful 4.9-mile wall (~7.3% avg) up the Mayacamas with knockout Sonoma Valley views — a rite-of-passage climb best paired with a smoother Trinity Rd descent.",
    safetyNote: "Very low traffic, but do NOT descend Cavedale — its pavement is broken with potholes and gravel. Climb Cavedale, descend Trinity. Steep kickers near the top.",
    url: "https://pjammcycling.com/climb/385.Cavedale%20Road",
    path: [[38.365,-122.523],[38.36,-122.5],[38.4,-122.48],[38.41,-122.49],[38.39,-122.51],[38.365,-122.523]]
  },
  {
    name: "West Dry Creek Road Loop (Healdsburg)",
    region: "Marin / North Bay",
    miles: "34", elev: 1200, difficulty: "Moderate", safety: "moderate",
    why: "One of the most famous ribbons of pavement in the state — a narrow, canopied lane winding past marquee wineries up Dry Creek Valley toward Lake Sonoma, gently rolling and endlessly scenic.",
    safetyNote: "West Dry Creek Rd is a narrow, no-centerline lane with blind curves and one-lane bridges — expect winery traffic on weekends. The Dry Creek Rd return is wider but busier.",
    url: "https://ridewithgps.com/routes/28888326",
    path: [[38.61,-122.869],[38.65,-122.92],[38.7,-122.97],[38.71,-123.01],[38.66,-122.94],[38.61,-122.869]]
  },
  {
    name: "Geysers Road / Alexander Valley (Healdsburg)",
    region: "Marin / North Bay",
    miles: "45-55", elev: 4500, difficulty: "Very hard", safety: "caution",
    why: "One of the most scenic climbs in the Bay Area — a 4.1-mile, ~8.7% wall (with 10-15% pitches) into the geothermal high country above Alexander Valley's vineyards.",
    safetyNote: "Extremely remote — no services, no water, minimal cell coverage; ride self-supported. Steep grades, rough pavement up high, and a technical descent. For fit, experienced riders only.",
    url: "https://ridewithgps.com/ambassador_routes/743-geysers-road-loop-advanced",
    path: [[38.61,-122.869],[38.63,-122.8],[38.7,-122.9],[38.73,-122.83],[38.79,-122.79]]
  },
  {
    name: "Kings Ridge / Fort Ross / Meyers Grade (Sonoma Coast)",
    region: "Marin / North Bay",
    miles: "50-53", elev: 6300, difficulty: "Very hard", safety: "caution",
    why: "The crown jewel of Sonoma coast riding — Cazadero to the endless King Ridge, the plunge to Hauser Bridge, then Seaview and the spectacular Meyers Grade descent high above the Pacific.",
    safetyNote: "Very remote with almost no traffic, but long, steep, technical descents (Meyers Grade hits 16%) on rough pavement; bring everything. Fog and wind on the coastal ridge. A Grasshopper-caliber effort.",
    url: "https://ridewithgps.com/routes/15490837",
    path: [[38.452,-123.113],[38.537,-123.122],[38.6,-123.15],[38.6,-123.22],[38.53,-123.2],[38.51,-123.24],[38.49,-123.22],[38.452,-123.113]]
  },
  {
    name: "Pine Flat Road (Healdsburg)",
    region: "Marin / North Bay",
    miles: "30-40 (out & back)", elev: 3600, difficulty: "Very hard", safety: "caution",
    why: "The second-toughest climb in Sonoma County — 11+ miles into the Mayacamas that saves the worst for last: 'The Wall,' a half-mile averaging 15% near the top.",
    safetyNote: "A locals' climb, very quiet; the middle actually descends before 'The Wall.' Remote with no services; narrow pavement and a fast, exposed descent — control your speed.",
    url: "https://ridewithgps.com/routes/2022489",
    path: [[38.61,-122.869],[38.635,-122.8],[38.66,-122.79],[38.68,-122.78],[38.72,-122.71]]
  },
  {
    name: "Twin Peaks / Golden Gate Park / Great Highway (SF City Loop)",
    region: "SF + Peninsula",
    miles: "20-23", elev: 1500, difficulty: "Moderate", safety: "moderate",
    why: "The definitive SF city tour — leg-burning switchbacks up Twin Peaks for a 360° panorama, then a glide through Golden Gate Park to the ocean and the car-free Upper Great Highway.",
    safetyNote: "Mixed urban riding — watch traffic, MUNI tracks, and tourists on the Twin Peaks approach. Upper Great Highway is a car-free park (Fri noon–Mon 6am). Descents off Twin Peaks are steep with tight turns.",
    url: "https://ridewithgps.com/routes/53254566",
    path: [[37.795,-122.394],[37.7525,-122.4477],[37.769,-122.483],[37.76,-122.51],[37.784,-122.505],[37.806,-122.466],[37.795,-122.394]]
  },
  {
    name: "Highway 92 / Half Moon Bay – Crystal Springs",
    region: "SF + Peninsula",
    miles: "12-15", elev: 1750, difficulty: "Moderate", safety: "caution",
    why: "The main coastal-crossing climb of the Peninsula — a steady ~5.4% grade over the ridge from the coast to the Crystal Springs reservoirs and Cañada Rd, with Pacific glimpses near the top.",
    safetyNote: "IMPORTANT — Hwy 92 is narrow, shoulderless in places, steep, and heavily used by cars and trucks; nervous riders should start on Skyline instead. The eastbound descent toward Cañada is fast and blind-cornered.",
    url: "https://pjammcycling.com/climb/4997.Skyline-Blvd-Crystal-Springs-Reservoir",
    path: [[37.463,-122.428],[37.5,-122.375],[37.512,-122.353],[37.53,-122.35],[37.47,-122.31],[37.43,-122.25]]
  },
  {
    name: "Purisima Creek / Verde / Higgins Backroads (Half Moon Bay)",
    region: "SF + Peninsula",
    miles: "24-30", elev: 1850, difficulty: "Moderate", safety: "moderate",
    why: "A quiet coastal-backroad loop — up Higgins Canyon to McGovern Ridge, then rolling down redwood-shaded Purisima Creek Rd to Verde Rd, dodging Hwy 1 traffic almost entirely.",
    safetyNote: "Low traffic on the backroads; Higgins/Purisima is a narrow single-lane road with blind curves, potholes, and a few steep pitches. Brief exposure on Hwy 1 near Verde — use the shoulder.",
    url: "https://ridewithgps.com/routes/9454834",
    path: [[37.463,-122.428],[37.445,-122.4],[37.415,-122.385],[37.395,-122.405],[37.385,-122.435],[37.42,-122.45],[37.463,-122.428]]
  },
  {
    name: "Pacifica – Devil's Slide – Montara (Hwy 1)",
    region: "SF + Peninsula",
    miles: "12-18 (out & back)", elev: 900, difficulty: "Moderate", safety: "moderate",
    why: "One of the most dramatic short coastal rides anywhere — the car-free, cliff-hugging Devil's Slide Trail (a former stretch of Hwy 1) with wide paved lanes and huge Pacific views down to Montara.",
    safetyNote: "The Devil's Slide Trail itself is car-free and safe; the Hwy 1 approaches through Pacifica and Montara are busy with a variable shoulder. Wind and fog common; watch pedestrians on the trail.",
    url: "https://ridewithgps.com/routes/30173640",
    path: [[37.583,-122.497],[37.578,-122.51],[37.572,-122.515],[37.542,-122.512],[37.525,-122.513],[37.583,-122.497]]
  },
  {
    name: "Sweeney Ridge / Sneath Lane (San Bruno – Pacifica)",
    region: "SF + Peninsula",
    miles: "6 (climb, out & back)", elev: 900, difficulty: "Moderate", safety: "moderate",
    why: "A quirky mixed-surface climb up a gated bike trail to the old Nike missile site atop Sweeney Ridge, with sweeping views over South SF, the ocean, and the bay.",
    safetyNote: "First mile is quiet residential road; above the gate it's a paved-then-rougher multi-use trail (best on wider tires) shared with hikers — keep speed down on the descent. Restroom at top, no water.",
    url: "https://ridewithgps.com/routes/550522",
    path: [[37.628,-122.435],[37.617,-122.443],[37.61,-122.45],[37.599,-122.462],[37.617,-122.443]]
  },
  {
    name: "Pescadero – Gazos Creek – Año Nuevo Coast Loop",
    region: "SF + Peninsula",
    miles: "30-40", elev: 2000, difficulty: "Moderate", safety: "moderate",
    why: "A gorgeous South Coast loop past Pigeon Point Lighthouse and the Año Nuevo elephant-seal reserve, then inland up the flat, redwood-canopied Gazos Creek Rd back to Pescadero (Arcangeli/Duarte's stop mandatory).",
    safetyNote: "The Hwy 1 stretch has moderate weekend traffic and a variable shoulder, with strong coastal winds and fog. Gazos Creek and Cloverdale are quiet backroads; watch damp shaded pavement and potholes.",
    url: "https://ridewithgps.com/routes/5123342",
    path: [[37.255,-122.383],[37.182,-122.394],[37.122,-122.31],[37.16,-122.35],[37.2,-122.36],[37.255,-122.383]]
  },
  {
    name: "Star Hill / Swett / La Honda Backroads",
    region: "SF + Peninsula",
    miles: "30-37", elev: 5000, difficulty: "Very hard", safety: "caution",
    why: "The connoisseur's Peninsula loop — stitching the steep, hidden Star Hill and Swett Rd pitches off Tunitas Creek into the La Honda backcountry for a huge, low-traffic climbing day.",
    safetyNote: "Extremely quiet, narrow one-lane roads with no centerline, blind corners, and pockets of broken pavement, leaves and gravel; some pitches exceed 15%. Technical descents — ride within your limits.",
    url: "https://ridewithgps.com/routes/5966344",
    path: [[37.43,-122.254],[37.408,-122.309],[37.375,-122.33],[37.36,-122.32],[37.335,-122.29],[37.319,-122.274]]
  },
  {
    name: "Marsh Creek Road / Round Valley / Byron",
    region: "East Bay",
    miles: "40-50", elev: 2800, difficulty: "Moderate", safety: "moderate",
    why: "The quiet 'back door' to Mt. Diablo's east flank — rolling ranchland past Marsh Creek Reservoir and Round Valley Preserve, one of the East Bay's most peaceful stretches of tarmac.",
    safetyNote: "Light traffic on Marsh Creek Rd west of the reservoir with a few 7-10% climbs; the Byron/Camino Diablo end is flat and open with occasional fast rural traffic and gusty crosswinds. Narrow near Clayton.",
    url: "https://www.komoot.com/guide/1942884/road-cycling-routes-around-byron",
    path: [[37.941,-121.9358],[37.906,-121.825],[37.888,-121.77],[37.873,-121.715],[37.864,-121.628],[37.83,-121.728],[37.905,-121.83]]
  },
  {
    name: "Norris Canyon Road (San Ramon – Castro Valley)",
    region: "East Bay",
    miles: "20-30", elev: 2000, difficulty: "Moderate", safety: "caution",
    why: "A short, punchy connector climb (~530 ft in 2 mi, pitches of 10-11%) through an oak-shaded canyon — a favorite training rep linking San Ramon to Castro Valley.",
    safetyNote: "CAUTION — a 2025 washout reduced the steep downhill section to one lane on a signal; verify current status. Narrow, twisty, no shoulder, blind curves on the descent; commuter traffic at both ends.",
    url: "https://ridechronicles.com/2015/05/14/norris-canyon/",
    path: [[37.7625,-121.97],[37.758,-121.995],[37.754,-122.018],[37.736,-122.04],[37.704,-122.07],[37.755,-121.96]]
  },
  {
    name: "Moraga / Canyon / Bollinger Canyon Loop",
    region: "East Bay",
    miles: "20-28", elev: 1800, difficulty: "Moderate", safety: "moderate",
    why: "Combines the mellow Bollinger Canyon Rd dead-end spur toward Las Trampas with the wooded hamlet of Canyon — quiet, rural riding minutes from suburbia.",
    safetyNote: "The Bollinger Canyon dead-end is low-traffic and safe; Moraga Rd and Canyon Rd carry moderate suburban traffic with narrow shoulders.",
    url: "https://ridewithgps.com/routes/59646",
    path: [[37.834,-122.129],[37.845,-122.12],[37.856,-122.1],[37.842,-122.155],[37.833,-122.18],[37.834,-122.129]]
  },
  {
    name: "Camino Tassajara / Highland Road / Blackhawk",
    region: "East Bay",
    miles: "30-40", elev: 1800, difficulty: "Moderate", safety: "moderate",
    why: "Rolls from Danville past Blackhawk into the empty Livermore-side backroads via scenic, low-traffic Highland Rd — a classic 'House of Pain' loop shape.",
    safetyNote: "Camino Tassajara is a busy suburban arterial but has wide bike lanes; Highland Rd is scenic and quiet with rolling terrain and a few blind rises. Watch fast commuter traffic near Blackhawk.",
    url: "https://ridewithgps.com/routes/35655469",
    path: [[37.813,-121.999],[37.818,-121.913],[37.806,-121.85],[37.766,-121.796],[37.735,-121.77],[37.81,-121.92]]
  },
  {
    name: "Cull Canyon / Crow Canyon (Castro Valley)",
    region: "East Bay",
    miles: "12-25", elev: 900, difficulty: "Moderate", safety: "moderate",
    why: "A quiet, gently rolling out-and-back through horse country past Cull Canyon Lake — a relaxed spin that pairs naturally with Crow Canyon or Palomares.",
    safetyNote: "Cull Canyon Rd is low-traffic with restrooms/water at the regional park; Crow Canyon Rd is busier and faster with a narrow shoulder. Gentle grades, no serious descents.",
    url: "https://ridewithgps.com/routes/1345332",
    path: [[37.707,-122.068],[37.728,-122.053],[37.753,-122.033],[37.736,-122.03],[37.755,-121.96]]
  },
  {
    name: "Livermore Wine Country: Tesla Road / Del Valle",
    region: "East Bay",
    miles: "27-45", elev: 2000, difficulty: "Moderate", safety: "moderate",
    why: "Vineyard-lined Tesla Rd, eucalyptus groves, and a spur to Lake Del Valle — the Bay Area's most relaxed wine-country cycling, with winery stops en route.",
    safetyNote: "Tesla Rd has a separated multi-use path in sections; Mines/Del Valle Rd carries moderate traffic with a short steep pitch to the park gate. Watch weekend winery-visitor traffic and hot, exposed summer afternoons.",
    url: "https://ridewithgps.com/routes/29280556",
    path: [[37.682,-121.768],[37.648,-121.73],[37.636,-121.706],[37.61,-121.705],[37.635,-121.76],[37.672,-121.77]]
  },
  {
    name: "Metcalf Road / Coyote Creek",
    region: "South Bay",
    miles: "24-28", elev: 2000, difficulty: "Hard", safety: "caution",
    why: "A brutally steep, wall-like South Bay classic (the San Felipe backside softens it) reached car-free along the Coyote Creek Trail.",
    safetyNote: "Metcalf Rd's front side has sustained double-digit grades with no shoulder; the motorcycle park adds weekend traffic. The Coyote Creek Trail approach is car-free. Steep, fast descent — control speed.",
    url: "https://ridewithgps.com/routes/29808204",
    path: [[37.279,-121.793],[37.25,-121.76],[37.236,-121.735],[37.245,-121.715],[37.265,-121.77]]
  },
  {
    name: "Coyote Lake / Harvey Bear Loop (Gilroy)",
    region: "South Bay",
    miles: "25-35", elev: 1800, difficulty: "Moderate", safety: "moderate",
    why: "Mellow, pretty rollers around Coyote Reservoir with quiet dead-end spurs (Coyote Lake Rd, Gilroy Hot Springs Rd) — an iconic mixed-terrain option if you add the dirt Coyote Lake connector.",
    safetyNote: "Roop Rd and Coyote Lake Rd are low-traffic; the reservoir road is a string of campground/boat-launch driveways so watch for turning cars. Some sections are gravel/dirt if you link the full loop.",
    url: "https://bayareabikepacking.com/coyote-lake-henry-coe-mixed-terrain-loop/",
    path: [[37.033,-121.55],[37.07,-121.51],[37.09,-121.535],[37.112,-121.546],[37.135,-121.548],[37.125,-121.49],[37.04,-121.56]]
  },
  {
    name: "Henry Coe / East Dunne Avenue (Anderson Lake)",
    region: "South Bay",
    miles: "24", elev: 2500, difficulty: "Hard", safety: "caution",
    why: "A relentless switchbacked climb to Henry Coe State Park HQ, wrapping high above Anderson Reservoir — one of the South Bay's great 'top of the world' summits.",
    safetyNote: "Open, but Anderson Reservoir is drawn down for a multi-year dam retrofit and a water-tank project on East Dunne runs through end of 2026 — obey signage and expect equipment on the shoulder. Narrow, no shoulder, blind switchbacks; steep descent.",
    url: "https://ridewithgps.com/routes/1210920",
    path: [[37.131,-121.647],[37.162,-121.63],[37.178,-121.606],[37.19,-121.57],[37.187,-121.547]]
  },
  {
    name: "Hecker Pass (Hwy 152, Gilroy – Watsonville)",
    region: "South Bay",
    miles: "12-30", elev: 1400, difficulty: "Moderate", safety: "caution",
    why: "The historic pass over the Santa Cruz Mountains linking Santa Clara Valley to Watsonville — a steady, scenic grade to a 1,339 ft summit near Mt. Madonna Park.",
    safetyNote: "KNOWN HAZARD — Hecker Pass has zero shoulder on significant portions and carries fast highway traffic. Ride early, use a mirror, and treat it as a there-and-back climb. A new bike path/roundabout improved the Gilroy end.",
    url: "https://pjammcycling.com/climb/1305.Hecker-Pass",
    path: [[37.006,-121.59],[37.008,-121.63],[37.005,-121.71],[36.996,-121.75],[36.965,-121.77]]
  },
  {
    name: "Santa Teresa / Bailey / McKean Loop",
    region: "South Bay",
    miles: "20-30", elev: 1300, difficulty: "Moderate", safety: "moderate",
    why: "The quintessential Almaden-area training loop — Santa Teresa Blvd, a short Bailey Rd punch, and quiet McKean Rd past Calero Reservoir.",
    safetyNote: "Santa Teresa Blvd has bike lanes; McKean Rd is scenic and lower-traffic with a narrow shoulder and occasional fast cars. Bailey Rd's overpass and rollers require attention. Popular with clubs.",
    url: "https://ridewithgps.com/routes/3354950",
    path: [[37.234,-121.79],[37.18,-121.755],[37.19,-121.785],[37.21,-121.83],[37.23,-121.8]]
  },
  {
    name: "Redwood Retreat Road / Mt. Madonna Road",
    region: "Santa Cruz Mtns",
    miles: "25-35", elev: 2600, difficulty: "Very hard", safety: "caution",
    why: "The original Watsonville–Gilroy wagon road climbs through deep redwoods with 2+ miles of sustained double digits to Mt. Madonna County Park — a hidden, low-traffic gem.",
    safetyNote: "Mt. Madonna Rd is one lane for most of its length, no bike lanes, rough/variable surface, and can be gated — call the park for current status. Redwood Retreat Rd is quiet and narrow. Steep, technical descent.",
    url: "https://ridewithgps.com/routes/848171",
    path: [[37.018,-121.618],[37.045,-121.66],[37.05,-121.695],[37.025,-121.715],[37.012,-121.725]]
  },
  {
    name: "Soquel–San Jose Road / Old San Jose Road",
    region: "Santa Cruz Mtns",
    miles: "30-45", elev: 3500, difficulty: "Hard", safety: "moderate",
    why: "A 'best of the best' mountain road — smooth pavement and sweeping turns through beautiful redwood forest connecting Soquel to Summit, pairing perfectly with Old Santa Cruz Hwy.",
    safetyNote: "Descending Soquel–San Jose Rd can carry higher traffic with a narrow shoulder — use caution. The Summit turnoff is easy to miss. Long climb, exposed in spots, blind curves on the descent.",
    url: "https://ridewithgps.com/routes/29298218",
    path: [[36.988,-121.956],[37.03,-121.935],[37.102,-121.923],[37.12,-121.935],[37.15,-121.97]]
  },
  {
    name: "Alba Road",
    region: "Santa Cruz Mtns",
    miles: "15-30", elev: 2800, difficulty: "Very hard", safety: "moderate",
    why: "The hardest climb in Santa Cruz County — 3.8 mi at 10.3% average through towering redwoods, ranked among the Bay Area's toughest. Loop back via Empire Grade.",
    safetyNote: "Extremely steep and narrow (double-to-single lane), rough first mile, dark forest — but very light traffic and rated a safe climb. The Empire Grade descent is fast; watch gravel and blind corners.",
    url: "https://pjammcycling.com/climb/430.Alba%20Road",
    path: [[37.051,-122.073],[37.087,-122.087],[37.0895,-122.091],[37.105,-122.124],[37.06,-122.095]]
  },
  {
    name: "Loma Prieta / Mt. Loma Prieta via Summit Road",
    region: "Santa Cruz Mtns",
    miles: "25-40", elev: 4000, difficulty: "Very hard", safety: "caution",
    why: "A remote ridgeline pilgrimage to the 3,790 ft highest peak in the Santa Cruz Mountains, along the county-line ridge — an iconic mixed/gravel objective with huge views.",
    safetyNote: "Summit Rd mixes paved and unpaved; the final push up Loma Prieta Way turns to rough gravel, dirt and rock near the radio installations, with private-property restrictions on parts. Very light traffic; long, exposed, remote — carry water and tools.",
    url: "https://bayarearides.com/rides/summitroad/",
    path: [[37.123,-121.933],[37.108,-121.876],[37.106,-121.852],[37.11,-121.845],[37.1113,-121.8434]]
  },
  {
    name: "China Grade / Big Basin Ridge",
    region: "Santa Cruz Mtns",
    miles: "28", elev: 3400, difficulty: "Hard", safety: "caution",
    why: "Big Basin Way (Hwy 236) rolls gently along Boulder Creek before China Grade rears up through primeval redwoods to the ridge — a raw, atmospheric loop through California's oldest state park.",
    safetyNote: "The park is still recovering from the 2020 CZU fire — verify road/park status before going. China Grade has an atrocious potholed surface; ride it carefully. Hwy 236 is narrow, winding, with tourist traffic on weekends.",
    url: "https://ridewithgps.com/routes/41223675",
    path: [[37.126,-122.122],[37.16,-122.17],[37.185,-122.19],[37.172,-122.222],[37.13,-122.125]]
  },
  {
    name: "Hwy 9 Top-to-Bottom: Saratoga Gap → Santa Cruz",
    region: "Santa Cruz Mtns",
    miles: "72", elev: 6180, difficulty: "Hard", safety: "caution",
    why: "The definitive spine of the range — a continuous ridge-to-sea plunge on smooth, banked pavement through redwood canyon towns (Boulder Creek, Ben Lomond, Felton) straight to the Santa Cruz beach.",
    safetyNote: "Upper Hwy 9 is fast and technical with blind, off-camber corners; RVs and logging traffic below Boulder Creek. Control speed, take the lane through town centers, watch gravel/leaf litter in shaded corners.",
    url: "https://ridewithgps.com/routes/2068526",
    path: [[37.2641,-122.023],[37.2971,-122.132],[37.223,-122.157],[37.1263,-122.122],[37.089,-122.086],[37.051,-122.073],[36.974,-122.03]]
  },
  {
    name: "Los Gatos → Santa Cruz via Old Santa Cruz Hwy & Soquel",
    region: "Santa Cruz Mtns",
    miles: "61", elev: 4900, difficulty: "Hard", safety: "moderate",
    why: "The classic 'back way' over the summit ridge — trading Hwy 17's guardrail for quiet Old Santa Cruz Hwy, a Summit Store stop, and a sweeping Soquel-Dr coast into town.",
    safetyNote: "Alma Bridge/Lexington approach has narrow shoulders and reservoir traffic; Old Santa Cruz Hwy pavement is broken in spots. This route exists to avoid Hwy 17 — never ride 17 itself. Fast descending traffic on Soquel–San Jose Rd.",
    url: "https://ridewithgps.com/routes/29298218",
    path: [[37.226,-121.985],[37.188,-121.992],[37.145,-121.972],[37.155,-121.955],[37.05,-121.93],[36.99,-121.956],[36.974,-122.03]]
  },
  {
    name: "San Francisco → Santa Cruz Coastal Classic (Hwy 1)",
    region: "Santa Cruz Mtns",
    miles: "85", elev: 4500, difficulty: "Very hard", safety: "caution",
    why: "The bucket-list ~85-mile point-to-point down the entire San Mateo/Santa Cruz coastline — Devil's Slide, the Pescadero bakery, and the Davenport bluffs before finishing at the Santa Cruz Wharf.",
    safetyNote: "Long Hwy 1 stretches with variable shoulder and 55 mph traffic; the shoulder narrows and disappears south of Waddell toward Davenport. Ride the Devil's Slide bike path, start early to beat headwinds/fog, use rear lights.",
    url: "https://ridewithgps.com/routes/33387402",
    path: [[37.769,-122.509],[37.611,-122.491],[37.463,-122.429],[37.325,-122.383],[37.255,-122.383],[37.011,-122.196],[36.974,-122.03]]
  },
  {
    name: "Peninsula → Santa Cruz: Woodside via West Alpine & Coast",
    region: "Santa Cruz Mtns",
    miles: "62", elev: 5900, difficulty: "Very hard", safety: "caution",
    why: "The connoisseur's route off the Peninsula — a big Skyline/West Alpine climb through old-growth redwoods, then a Pescadero descent onto Hwy 1 for the coastal run into Santa Cruz.",
    safetyNote: "West Alpine is remote with rough pavement, no services, and a fast descent — carry tools and layers. Same Hwy 1 shoulder cautions south of Waddell. Avoid Hwy 84 in heavy fog.",
    url: "https://ridewithgps.com/routes/16118394",
    path: [[37.43,-122.254],[37.352,-122.293],[37.3,-122.28],[37.255,-122.383],[37.11,-122.29],[37.011,-122.196],[36.974,-122.03]]
  },
  {
    name: "Skyline-to-the-Sea by Road: Saratoga Gap → Big Basin → Coast",
    region: "Santa Cruz Mtns",
    miles: "48", elev: 3800, difficulty: "Hard", safety: "caution",
    why: "A paved tribute to the famous dirt Skyline-to-the-Sea trail, threading Hwy 236 through Big Basin's redwoods on the way to the ocean and Santa Cruz.",
    safetyNote: "NOTE: the actual Skyline-to-the-Sea Trail (and Gazos Creek Rd) is dirt — there's no fully paved direct link from Big Basin to Waddell. This road version descends via Boulder Creek/Felton. Hwy 236 is single-lane in spots with tight blind curves and no shoulder.",
    url: "https://ridewithgps.com/routes/16118394",
    path: [[37.2971,-122.132],[37.223,-122.157],[37.172,-122.222],[37.1263,-122.122],[37.051,-122.073],[36.974,-122.03]]
  },
  {
    name: "San Jose → Santa Cruz via Mountain Charlie (Hwy 17 avoidance)",
    region: "Santa Cruz Mtns",
    miles: "42", elev: 3600, difficulty: "Hard", safety: "caution",
    why: "The rideable, car-light answer to 'how do I get from San Jose to Santa Cruz without Hwy 17' — Los Gatos Creek Trail to Old Santa Cruz Hwy, over Mountain Charlie, then down through Scotts Valley to the coast.",
    safetyNote: "Built expressly to bypass Hwy 17, which is illegal and suicidal to ride — do not use it. Old Santa Cruz Hwy and Mountain Charlie are narrow one-lane roads with steep pitches and blind bends; hold your line on descents. Use Glenwood Dr through Scotts Valley.",
    url: "https://ridewithgps.com/routes/2433260",
    path: [[37.335,-121.89],[37.226,-121.985],[37.188,-121.992],[37.145,-121.972],[37.11,-121.985],[37.051,-122.014],[36.974,-122.03]]
  },
  {
    name: "Santa Cruz Mountains Sampler Century",
    region: "Santa Cruz Mtns",
    miles: "101", elev: 11000, difficulty: "Very hard", safety: "caution",
    why: "The queen-stage century that strings together the range's marquee climbs and a coastal finish — Hwy 9, the Skyline ridge, and the Hwy 1 bluffs, all starting and ending at the Santa Cruz coast.",
    safetyNote: "11,000 ft of climbing with long remote stretches and few services between Boulder Creek and the coast — carry food, tools and lights. Combines fast Hwy 9 descents, narrow ridge roads, and open Hwy 1 shoulder. Start at dawn.",
    url: "https://ridewithgps.com/routes/3341825",
    path: [[36.974,-122.03],[37.051,-122.073],[37.1263,-122.122],[37.2971,-122.132],[37.25,-122.2],[37.255,-122.383],[37.011,-122.196],[36.974,-122.03]]
  }
];

window.RESTAURANTS = [
  // MARIN / NORTH BAY
  {name:"Bovine Bakery", town:"Point Reyes Station", region:"Marin / North Bay", lat:38.070, lng:-122.807, type:"bakery", rank:"Iconic cyclist stop", stop:"Quick", desc:"The iconic West Marin pastry/scone stop, opens early."},
  {name:"Cowgirl Creamery", town:"Point Reyes Station", region:"Marin / North Bay", lat:38.069, lng:-122.807, type:"cafe", rank:"Famous local", stop:"Quick", desc:"Local cheese + sandwiches steps from Bovine."},
  {name:"Station House Cafe", town:"Point Reyes Station", region:"Marin / North Bay", lat:38.069, lng:-122.806, type:"restaurant", rank:"Local landmark", stop:"Sit-down", desc:"Reliable sit-down breakfast/lunch in town."},
  {name:"Madcap", town:"San Anselmo", region:"Marin / North Bay", lat:37.975, lng:-122.561, type:"restaurant", rank:"Michelin 1★", stop:"Destination", desc:"Ron Siegel's refined Cal-Japanese prix fixe — Marin's only starred restaurant."},
  {name:"Insalata's", town:"San Anselmo", region:"Marin / North Bay", lat:37.976, lng:-122.548, type:"restaurant", rank:"Michelin Bib Gourmand", stop:"Sit-down", desc:"20-year Mediterranean mainstay on Sir Francis Drake."},
  {name:"Village Sake", town:"Fairfax", region:"Marin / North Bay", lat:37.987, lng:-122.589, type:"restaurant", rank:"Michelin Bib Gourmand", stop:"Sit-down", desc:"Creative Japanese small plates in downtown Fairfax."},
  {name:"Sushi Ran", town:"Sausalito", region:"Marin / North Bay", lat:37.859, lng:-122.483, type:"restaurant", rank:"Michelin Bib Gourmand", stop:"Sit-down", desc:"Nationally-ranked sushi in a cozy bungalow."},
  {name:"Sam's Anchor Cafe", town:"Tiburon", region:"Marin / North Bay", lat:37.874, lng:-122.456, type:"restaurant", rank:"Classic ride stop", stop:"Sit-down", desc:"The end-of-ride Tiburon waterfront deck spot on the Paradise Loop."},
  {name:"Pig in a Pickle", town:"Corte Madera", region:"Marin / North Bay", lat:37.926, lng:-122.512, type:"restaurant", rank:"Michelin Bib Gourmand", stop:"Sit-down", desc:"Southern-style BBQ at Corte Madera."},
  {name:"Playa", town:"Mill Valley", region:"Marin / North Bay", lat:37.906, lng:-122.546, type:"restaurant", rank:"Michelin Bib Gourmand", stop:"Sit-down", desc:"Modern Mexican at the base of the Mt. Tam climbs."},
  {name:"Parkside Cafe / Siren Canteen", town:"Stinson Beach", region:"Marin / North Bay", lat:37.901, lng:-122.643, type:"cafe", rank:"Classic descent stop", stop:"Quick", desc:"Beach-town coffee & snack bar after the Mt. Tam descent."},
  {name:"Rancho Nicasio", town:"Nicasio", region:"Marin / North Bay", lat:38.060, lng:-122.697, type:"restaurant", rank:"Roadhouse landmark", stop:"Sit-down", desc:"Barbecue roadhouse right on the Nicasio loop."},

  // SF + PENINSULA (incl. coast)
  {name:"Rich Table", town:"San Francisco", region:"SF + Peninsula", lat:37.776, lng:-122.423, type:"restaurant", rank:"SF Chronicle ~#2", stop:"Destination", desc:"Beloved California cooking (the sardine chips)."},
  {name:"Cotogna", town:"San Francisco", region:"SF + Peninsula", lat:37.796, lng:-122.403, type:"restaurant", rank:"SF Chronicle #57", stop:"Sit-down", desc:"Best-value pasta from Michael Tusk's group."},
  {name:"Zuni Café", town:"San Francisco", region:"SF + Peninsula", lat:37.773, lng:-122.423, type:"restaurant", rank:"SF Chronicle Top 100", stop:"Sit-down", desc:"Cal-Med institution — the roast chicken for two."},
  {name:"Tartine Bakery", town:"San Francisco", region:"SF + Peninsula", lat:37.761, lng:-122.424, type:"bakery", rank:"Landmark bakery", stop:"Quick", desc:"Landmark morning buns and country bread."},
  {name:"Alice's Restaurant", town:"Sky Londa", region:"SF + Peninsula", lat:37.387, lng:-122.297, type:"restaurant", rank:"THE Skyline stop", stop:"Sit-down", desc:"Burgers & breakfast at Hwy 84 & 35 'Four Corners' — the cyclist/moto hub."},
  {name:"Roberts Market", town:"Woodside", region:"SF + Peninsula", lat:37.430, lng:-122.255, type:"cafe", rank:"Classic fuel stop", stop:"Quick", desc:"Deli sandwiches before the Old La Honda / Kings climbs."},
  {name:"Buck's of Woodside", town:"Woodside", region:"SF + Peninsula", lat:37.429, lng:-122.256, type:"restaurant", rank:"Iconic diner", stop:"Sit-down", desc:"Quirky Silicon Valley breakfast institution."},
  {name:"San Gregorio General Store", town:"San Gregorio", region:"SF + Peninsula", lat:37.325, lng:-122.382, type:"cafe", rank:"Legendary coast haunt", stop:"Quick", desc:"Bloody Marys, live music, snacks off Hwy 84/1."},
  {name:"Duarte's Tavern", town:"Pescadero", region:"SF + Peninsula", lat:37.256, lng:-122.383, type:"restaurant", rank:"James Beard American Classic", stop:"Sit-down", desc:"Cream of artichoke soup & olallieberry pie."},
  {name:"Arcangeli / Norm's Market", town:"Pescadero", region:"SF + Peninsula", lat:37.256, lng:-122.384, type:"bakery", rank:"Classic cyclist stop", stop:"Quick", desc:"Hot artichoke-garlic bread straight out of the oven."},
  {name:"Dad's Luncheonette", town:"Half Moon Bay", region:"SF + Peninsula", lat:37.464, lng:-122.428, type:"restaurant", rank:"Ex-3★ chef, cult favorite", stop:"Quick", desc:"Legendary burger in a train caboose off Hwy 1."},
  {name:"Sam's Chowder House", town:"Half Moon Bay", region:"SF + Peninsula", lat:37.503, lng:-122.479, type:"restaurant", rank:"Best-of lists", stop:"Sit-down", desc:"Lobster roll & clam chowder on the water."},
  {name:"Half Moon Bay Brewing Co.", town:"Princeton", region:"SF + Peninsula", lat:37.502, lng:-122.482, type:"brewery", rank:"Coast brewery", stop:"Sit-down", desc:"Harbor-side beers & food, a popular ride finish."},
  {name:"Apple Jack's", town:"La Honda", region:"SF + Peninsula", lat:37.319, lng:-122.274, type:"brewery", rank:"Historic roadhouse", stop:"Quick", desc:"Century-old woodsy bar on Hwy 84."},

  // SOUTH BAY + SANTA CRUZ
  {name:"Plumed Horse", town:"Saratoga", region:"South Bay", lat:37.256, lng:-122.023, type:"restaurant", rank:"Michelin 1★", stop:"Destination", desc:"Refined New American at the base of Hwy 9."},
  {name:"Dio Deka", town:"Los Gatos", region:"South Bay", lat:37.227, lng:-121.981, type:"restaurant", rank:"Michelin Selected", stop:"Destination", desc:"Upscale Hellenic in downtown Los Gatos."},
  {name:"Mentone", town:"Aptos", region:"Santa Cruz Mtns", lat:36.977, lng:-121.903, type:"restaurant", rank:"Michelin Selected", stop:"Sit-down", desc:"Chez Panisse alum's coastal Italian/Riviera cooking."},
  {name:"Bantam", town:"Santa Cruz", region:"Santa Cruz Mtns", lat:36.960, lng:-122.047, type:"restaurant", rank:"Michelin recognized", stop:"Sit-down", desc:"Wood-fired pizza + natural wine."},
  {name:"Verve Coffee Roasters", town:"Santa Cruz", region:"Santa Cruz Mtns", lat:36.964, lng:-121.992, type:"cafe", rank:"Renowned roaster", stop:"Quick", desc:"Top-tier coffee — prime Santa Cruz caffeine stop."},
  {name:"Sante Adairius Rustic Ales", town:"Capitola", region:"Santa Cruz Mtns", lat:36.976, lng:-121.954, type:"brewery", rank:"Nationally top-ranked brewery", stop:"Sit-down", desc:"Cult saisons & sours near the coast routes."},

  // EAST BAY
  {name:"Cheese Board Collective", town:"Berkeley", region:"East Bay", lat:37.880, lng:-122.269, type:"bakery", rank:"Iconic", stop:"Quick", desc:"Daily single vegetarian pizza + bakery in the Gourmet Ghetto."},
  {name:"Chez Panisse", town:"Berkeley", region:"East Bay", lat:37.880, lng:-122.269, type:"restaurant", rank:"Historic landmark", stop:"Destination", desc:"Alice Waters' birthplace of California cuisine (café is more casual)."},
  {name:"Great China", town:"Berkeley", region:"East Bay", lat:37.868, lng:-122.258, type:"restaurant", rank:"Michelin Bib Gourmand", stop:"Sit-down", desc:"Beloved Chinese near campus — the Peking duck."},
  {name:"Ippuku", town:"Berkeley", region:"East Bay", lat:37.869, lng:-122.268, type:"restaurant", rank:"Michelin Bib Gourmand", stop:"Sit-down", desc:"Yakitori + a huge sake list, downtown Berkeley."},
  {name:"Vik's Chaat", town:"Berkeley", region:"East Bay", lat:37.852, lng:-122.296, type:"restaurant", rank:"Michelin Selected", stop:"Quick", desc:"Counter-service chaat — great cheap fuel."},
  {name:"Fieldwork Brewing", town:"Berkeley", region:"East Bay", lat:37.869, lng:-122.290, type:"brewery", rank:"Well-regarded", stop:"Sit-down", desc:"Rotating fresh IPAs in a casual taproom."},
  {name:"Bosco's Bones & Brew", town:"Sunol", region:"East Bay", lat:37.594, lng:-121.883, type:"brewery", rank:"Cyclist hub", stop:"Sit-down", desc:"The Sunol post-ride beer-and-burger spot for Calaveras/Palomares."},
  {name:"Sideboard", town:"Danville", region:"East Bay", lat:37.822, lng:-122.000, type:"cafe", rank:"Popular ride cafe", stop:"Quick", desc:"Coffee & breakfast base for the Mt. Diablo climbs."},
  {name:"Taco Bell Cantina (Pacifica)", town:"Pacifica", region:"SF + Peninsula", lat:37.5918, lng:-122.5028, type:"restaurant", rank:"Cult cyclist/surfer stop", stop:"Quick", desc:"The beachfront Taco Bell at Linda Mar — legendary walk-up-window post-ride/surf hangout right on Hwy 1."},
  {name:"Alpine Inn (Zott's)", town:"Portola Valley", region:"SF + Peninsula", lat:37.4053, lng:-122.2098, type:"brewery", rank:"Historic cyclist beer garden", stop:"Sit-down", desc:"The legendary 'Zott's' — a centuries-old beer garden on Alpine Rd and the classic Peninsula ride meetup."}
];

window.FOOD_TYPES = {
  restaurant: { label: "Restaurant", color: "#c0392b", emoji: "🍽️" },
  cafe:       { label: "Café",       color: "#8e5a2d", emoji: "☕" },
  bakery:     { label: "Bakery",     color: "#d68910", emoji: "🥐" },
  brewery:    { label: "Brewery",    color: "#6c3483", emoji: "🍺" }
};


/* SF Chronicle Top 100 Best Bay Area Restaurants (2026 edition, ranked).
 * Source: San Francisco Chronicle, MacKenzie Chung Fegan & Cesar Hernandez, updated June 2026.
 * Facts only (name, cuisine, price, location, rank) — no review text reproduced.
 * NOTE: the LA Times has no Bay Area list; its "101 Best Restaurants" covers Los Angeles only. */
window.CHRONICLE100 = [
  {rank:1, name:"Four Kings", cuisine:"Cantonese", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.794093, lng:-122.405068},
  {rank:2, name:"The Progress", cuisine:"Californian", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.783661, lng:-122.433076},
  {rank:3, name:"Burdell", cuisine:"Soul food", price:"$$$", locality:"Oakland", region:"East Bay", lat:37.833928, lng:-122.26312},
  {rank:4, name:"Copra", cuisine:"South Indian", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.78536, lng:-122.432842},
  {rank:5, name:"Sun Moon Studio", cuisine:"Fine dining", price:"$$$$", locality:"Oakland", region:"East Bay", lat:37.8144902, lng:-122.2860402},
  {rank:6, name:"Popoca", cuisine:"Salvadoran", price:"$$", locality:"Oakland", region:"East Bay", lat:37.801346, lng:-122.274453},
  {rank:7, name:"Breadbelly", cuisine:"Asian American bakery", price:"$", locality:"San Francisco", region:"SF + Peninsula", lat:37.782612, lng:-122.473557},
  {rank:8, name:"Rich Table", cuisine:"American", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.77485, lng:-122.422843},
  {rank:9, name:"SingleThread", cuisine:"Fine dining", price:"$$$$", locality:"Healdsburg", region:"Marin / North Bay", lat:38.612435, lng:-122.869694},
  {rank:10, name:"Fù Huì Huá", cuisine:"Fine dining", price:"$$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.7527, lng:-122.408433},
  {rank:11, name:"Taishan Cuisine", cuisine:"Cantonese", price:"$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.797268, lng:-122.409846},
  {rank:12, name:"Jules", cuisine:"Pizza", price:"$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.77177, lng:-122.4306},
  {rank:13, name:"Soba Ichi", cuisine:"Japanese", price:"$", locality:"Oakland", region:"East Bay", lat:37.817068, lng:-122.285025},
  {rank:14, name:"Joodooboo", cuisine:"Korean", price:"$", locality:"Oakland", region:"East Bay", lat:37.83255, lng:-122.273742},
  {rank:15, name:"True Laurel", cuisine:"American", price:"$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.759501, lng:-122.411459},
  {rank:16, name:"Friends Only", cuisine:"Sushi", price:"$$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.790592, lng:-122.419252},
  {rank:17, name:"Benu", cuisine:"Fine dining", price:"$$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.785436, lng:-122.399214},
  {rank:18, name:"Quince", cuisine:"Fine dining", price:"$$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.797502, lng:-122.403368},
  {rank:19, name:"Tacos Oscar", cuisine:"Mexican", price:"$", locality:"Oakland", region:"East Bay", lat:37.828801, lng:-122.263521},
  {rank:20, name:"San Ho Won", cuisine:"Korean", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.759442, lng:-122.410179},
  {rank:21, name:"Sons & Daughters", cuisine:"Fine dining", price:"$$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.761625, lng:-122.410849},
  {rank:22, name:"Mägo", cuisine:"Fine dining", price:"$$$", locality:"Oakland", region:"East Bay", lat:37.823599, lng:-122.256041},
  {rank:23, name:"Sandy’s", cuisine:"NOLA sandwiches", price:"$", locality:"San Francisco", region:"SF + Peninsula", lat:37.769802, lng:-122.44629},
  {rank:24, name:"Bombera", cuisine:"Mexican", price:"$$", locality:"Oakland", region:"East Bay", lat:37.799536, lng:-122.215098},
  {rank:25, name:"Verjus", cuisine:"French wine bar", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.795826, lng:-122.402521},
  {rank:26, name:"Californios", cuisine:"Fine dining", price:"$$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.771467, lng:-122.412872},
  {rank:27, name:"Rose Pizzeria", cuisine:"Pizza", price:"$", locality:"Berkeley", region:"East Bay", lat:37.871415, lng:-122.271384},
  {rank:28, name:"Delfina", cuisine:"Italian", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.761362, lng:-122.424189},
  {rank:29, name:"Atelier Crenn", cuisine:"Fine dining", price:"$$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.798371, lng:-122.436045},
  {rank:30, name:"Ok’s Deli", cuisine:"Asian American deli", price:"$", locality:"Oakland", region:"East Bay", lat:37.82863, lng:-122.264547},
  {rank:31, name:"Minnie Bell’s Soul Movement", cuisine:"Soul food", price:"$", locality:"San Francisco", region:"SF + Peninsula", lat:37.782071, lng:-122.432708},
  {rank:32, name:"Hilda and Jesse", cuisine:"Fine dining", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.800052, lng:-122.411033},
  {rank:33, name:"Zuni Café", cuisine:"Californian", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.7736, lng:-122.421608},
  {rank:34, name:"Madcap", cuisine:"Fine dining", price:"$$$$", locality:"San Anselmo", region:"Marin / North Bay", lat:37.974754, lng:-122.561473},
  {rank:35, name:"Lunette", cuisine:"Cambodian", price:"$", locality:"San Francisco", region:"SF + Peninsula", lat:37.796787, lng:-122.393299},
  {rank:36, name:"State Bird Provisions", cuisine:"Californian", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.783661, lng:-122.433076},
  {rank:37, name:"Flour + Water", cuisine:"Italian", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.758923, lng:-122.412185},
  {rank:38, name:"La Vaca Birria", cuisine:"Mexican", price:"$", locality:"San Francisco", region:"SF + Peninsula", lat:37.75289, lng:-122.411391},
  {rank:39, name:"Aziza", cuisine:"Moroccan", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.780541, lng:-122.481714},
  {rank:40, name:"Bo Ne Phu Yen", cuisine:"Vietnamese", price:"$", locality:"San Jose", region:"South Bay", lat:37.321996, lng:-121.823061},
  {rank:41, name:"Fikscue", cuisine:"Indonesian-Texas barbecue", price:"$$", locality:"Alameda", region:"East Bay", lat:37.764481, lng:-122.241631},
  {rank:42, name:"Lily", cuisine:"Vietnamese", price:"$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.7828365, lng:-122.4616947},
  {rank:43, name:"LeYou Ethiopian", cuisine:"Ethiopian", price:"$", locality:"San Jose", region:"South Bay", lat:37.356601, lng:-121.905332},
  {rank:44, name:"Mijoté", cuisine:"French", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.758894, lng:-122.412746},
  {rank:45, name:"Nari", cuisine:"Thai", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.785561, lng:-122.428705},
  {rank:46, name:"Tanzie’s", cuisine:"Thai", price:"$$", locality:"Berkeley", region:"East Bay", lat:37.8621875, lng:-122.281927},
  {rank:47, name:"Mister Jiu’s", cuisine:"Chinese", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.793519, lng:-122.406524},
  {rank:48, name:"Yeobo, Darling", cuisine:"Korean Taiwanese", price:"$$$", locality:"Menlo Park", region:"SF + Peninsula", lat:37.450467, lng:-122.185181},
  {rank:49, name:"Dalida", cuisine:"Mediterranean", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.800033, lng:-122.459579},
  {rank:50, name:"La Taqueria", cuisine:"Mexican", price:"$", locality:"San Francisco", region:"SF + Peninsula", lat:37.750874, lng:-122.418158},
  {rank:51, name:"Cotogna", cuisine:"Italian", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.7974582, lng:-122.4034024},
  {rank:52, name:"3 Bottled Fish", cuisine:"Vietnamese", price:"$", locality:"Oakland", region:"East Bay", lat:37.7828651, lng:-122.2186265},
  {rank:53, name:"Prubechu", cuisine:"Chamorro", price:"$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.761319, lng:-122.419733},
  {rank:54, name:"Valley", cuisine:"Wine bar", price:"$$", locality:"Sonoma", region:"Marin / North Bay", lat:38.2923068, lng:-122.4591207},
  {rank:55, name:"Kitchen Istanbul", cuisine:"Turkish", price:"$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.78276, lng:-122.463114},
  {rank:56, name:"Side A", cuisine:"American", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.760616, lng:-122.410546},
  {rank:57, name:"Liholiho Yacht Club", cuisine:"American", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.788178, lng:-122.414583},
  {rank:58, name:"Kin Khao", cuisine:"Thai", price:"$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.784878, lng:-122.408965},
  {rank:59, name:"Cultured Pickle Shop", cuisine:"Californian", price:"$$", locality:"Berkeley", region:"East Bay", lat:37.86311, lng:-122.296843},
  {rank:60, name:"Lou’s Takeaway", cuisine:"Californian", price:"$", locality:"San Rafael", region:"Marin / North Bay", lat:38.013455, lng:-122.559454},
  {rank:61, name:"The Happy Crane", cuisine:"Cantonese", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.777491, lng:-122.4233},
  {rank:62, name:"Vik’s Chaat", cuisine:"Indian", price:"$", locality:"Berkeley", region:"East Bay", lat:37.861381, lng:-122.298419},
  {rank:63, name:"Peña’s Bakery", cuisine:"Mexican deli", price:"$", locality:"Oakland", region:"East Bay", lat:37.782997, lng:-122.220984},
  {rank:64, name:"Azalina’s", cuisine:"Malaysian", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.784584, lng:-122.414148},
  {rank:65, name:"Spicy Joi", cuisine:"Laotian", price:"$", locality:"Concord", region:"East Bay", lat:37.973734, lng:-122.042368},
  {rank:66, name:"Via Aurelia", cuisine:"Italian", price:"$$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.775773, lng:-122.388653},
  {rank:67, name:"Kunjip", cuisine:"Korean", price:"$", locality:"Santa Clara", region:"South Bay", lat:37.345975, lng:-121.978216},
  {rank:68, name:"Cyrus", cuisine:"Fine dining", price:"$$$$", locality:"Geyserville", region:"Marin / North Bay", lat:38.706405, lng:-122.900453},
  {rank:69, name:"Psychic Pie", cuisine:"Pizza", price:"$", locality:"Sebastopol", region:"Marin / North Bay", lat:38.390783, lng:-122.816695},
  {rank:70, name:"Eylan", cuisine:"Indian", price:"$$$", locality:"Menlo Park", region:"SF + Peninsula", lat:37.451145, lng:-122.177326},
  {rank:71, name:"Wolfsbane", cuisine:"Fine dining", price:"$$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.758065, lng:-122.388152},
  {rank:72, name:"Itria", cuisine:"Italian", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.752494, lng:-122.41781},
  {rank:73, name:"Sirene", cuisine:"American", price:"$$$", locality:"Oakland", region:"East Bay", lat:37.812832, lng:-122.246755},
  {rank:74, name:"Rintaro", cuisine:"Japanese", price:"$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.768814, lng:-122.415111},
  {rank:75, name:"Table Culture Provisions", cuisine:"Fine dining", price:"$$$", locality:"Petaluma", region:"Marin / North Bay", lat:38.231637, lng:-122.635065},
  {rank:76, name:"Spread Kitchen", cuisine:"Lebanese", price:"$", locality:"Sonoma", region:"Marin / North Bay", lat:38.311578, lng:-122.479894},
  {rank:77, name:"Mustards Grill", cuisine:"American", price:"$$", locality:"Napa", region:"Marin / North Bay", lat:38.418969, lng:-122.388169},
  {rank:78, name:"Scoma’s", cuisine:"Seafood", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.8089477, lng:-122.4184344},
  {rank:79, name:"Jubba", cuisine:"Somali", price:"$", locality:"San Jose", region:"South Bay", lat:37.257424, lng:-121.861023},
  {rank:80, name:"Smish Smash", cuisine:"Burgers", price:"$", locality:"San Francisco", region:"SF + Peninsula", lat:37.783048, lng:-122.408632},
  {rank:81, name:"Reem’s", cuisine:"Middle Eastern", price:"$", locality:"San Francisco", region:"SF + Peninsula", lat:37.750531, lng:-122.418077},
  {rank:82, name:"Cafe Colucci", cuisine:"Ethiopian", price:"$", locality:"Oakland", region:"East Bay", lat:37.841857, lng:-122.283714},
  {rank:83, name:"Saison", cuisine:"Fine dining", price:"$$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.779734, lng:-122.392524},
  {rank:84, name:"Enclos", cuisine:"Fine dining", price:"$$$$", locality:"Sonoma", region:"Marin / North Bay", lat:38.291519, lng:-122.455846},
  {rank:85, name:"The Laundromat", cuisine:"Pizza", price:"$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.775396, lng:-122.498867},
  {rank:86, name:"The Charter Oak", cuisine:"American", price:"$$$", locality:"St. Helena", region:"Marin / North Bay", lat:38.501786, lng:-122.464102},
  {rank:87, name:"Goodtime Bar", cuisine:"Californian", price:"$$", locality:"San Jose", region:"South Bay", lat:37.336204, lng:-121.889545},
  {rank:88, name:"House of Prime Rib", cuisine:"Steakhouse", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.793381, lng:-122.422502},
  {rank:89, name:"Ernest", cuisine:"Californian", price:"$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.763237, lng:-122.410712},
  {rank:90, name:"Alem’s Coffee", cuisine:"Eritrean", price:"$", locality:"Oakland", region:"East Bay", lat:37.840328, lng:-122.259833},
  {rank:91, name:"Ippuku", cuisine:"Japanese", price:"$$", locality:"Berkeley", region:"East Bay", lat:37.870162, lng:-122.267054},
  {rank:92, name:"Keeku da Dhaba", cuisine:"Indian", price:"$", locality:"Fremont", region:"East Bay", lat:37.556832, lng:-121.952386},
  {rank:93, name:"El Molino Central", cuisine:"Mexican", price:"$$", locality:"Sonoma", region:"Marin / North Bay", lat:38.315122, lng:-122.482002},
  {rank:94, name:"Mrs Khan Uyghur Cuisine", cuisine:"Uyghur", price:"$", locality:"Menlo Park", region:"SF + Peninsula", lat:37.452093, lng:-122.184677},
  {rank:95, name:"Mashaallah Halal Pakistani Food", cuisine:"Pakistani", price:"$", locality:"San Francisco", region:"SF + Peninsula", lat:37.780098, lng:-122.402901},
  {rank:96, name:"Patio Filipino", cuisine:"Filipino", price:"$$", locality:"San Bruno", region:"SF + Peninsula", lat:37.614872, lng:-122.405512},
  {rank:97, name:"Capital", cuisine:"Cantonese", price:"$", locality:"San Francisco", region:"SF + Peninsula", lat:37.794012, lng:-122.407078},
  {rank:98, name:"Yo También Cantina", cuisine:"Café", price:"$", locality:"San Francisco", region:"SF + Peninsula", lat:37.765114, lng:-122.460229},
  {rank:99, name:"Shizen", cuisine:"Vegan sushi", price:"$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.768328, lng:-122.421641},
  {rank:100, name:"Lazy Bear", cuisine:"Fine dining", price:"$$$$", locality:"San Francisco", region:"SF + Peninsula", lat:37.760395, lng:-122.419712}
];
