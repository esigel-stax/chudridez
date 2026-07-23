/* Chudridez search-core — pure NLP query parser, shared by the app and the test suite.
 * UMD: works as a <script> (window.ChudSearch) and as a Node/Vitest module. */
(function(root,factory){
  if(typeof module==="object"&&module.exports){ module.exports=factory(); }
  else { root.ChudSearch=factory(); }
})(typeof self!=="undefined"?self:this,function(){
  "use strict";
  const REGION_SYN={
    'Marin / North Bay':['marin','north bay','sausalito','tiburon','fairfax','san anselmo','point reyes','nicasio','mill valley','tam','tamalpais','stinson','bolinas','tomales','napa','sonoma','wine country','healdsburg','petaluma','calistoga','st helena'],
    'SF + Peninsula':['sf','san francisco','peninsula','woodside','portola valley','pescadero','half moon bay','skyline','la honda','pacifica','coastside','stanford','palo alto','menlo','san gregorio','montara','devil'],
    'East Bay':['east bay','oakland','berkeley','diablo','orinda','moraga','livermore','sunol','danville','pleasanton','three bears','morgan territory','mines','castro valley','fremont'],
    'South Bay':['south bay','san jose','morgan hill','gilroy','hamilton','sierra road','almaden','los gatos','saratoga','cupertino','milpitas'],
    'Santa Cruz Mtns':['santa cruz','boulder creek','bonny doon','big basin','felton','ben lomond','summit','soquel','loma prieta','scotts valley','aptos','capitola']
  };
  const REGIONWORDS=new Set(Object.values(REGION_SYN).flat().flatMap(s=>s.split(' ')));
  const FOOD_SYN={
    restaurant:['restaurant','restaurants','dinner','lunch','eat','food','michelin','fine dining','taco','tacos','burrito','burritos','pizza','sushi','ramen','italian','mexican','thai','seafood','oyster','oysters','bbq','barbecue','chinese','indian','burger','burgers','dumpling','noodle'],
    cafe:['cafe','cafes','coffee','espresso','latte','cappuccino'],
    bakery:['bakery','bakeries','pastry','pastries','croissant','bread','sourdough','donut','doughnut','bagel','baked'],
    brewery:['brewery','breweries','beer','beers','ipa','taproom','ale','pub','brew']
  };
  // Concept → keyword expansion. Lets abstract queries ("vegetarian", "get drunk", "jewish")
  // match restaurant names, cuisines, descriptions, and the Chronicle's 160+ best-of guide titles.
  const CONCEPTS=[
    {re:/\b(vegetarian|vegan|veggie|plant ?based|meatless|no meat)\b/, kw:['vegetarian','vegan','veggie','plant-based','tofu','meatless'], label:'🌱 vegetarian / vegan'},
    {re:/\b(get drunk|drunk|drink|drinks|drinking|booze|boozy|bar|bars|cocktail|cocktails|happy hour|nightcap|tipsy|wine|wines|beer|beers|brew|brews|natural wine|martini|martinis|speakeasy|dive|nightlife)\b/, kw:['bar','cocktail','wine','brewery','beer','ale','taproom','martini','natural wine','pub','sake','spirits','distillery','mezcal','dive'], food:'brewery', label:'🍸 drinks / bars'},
    {re:/\b(jewish|kosher|deli|delis|bagel|bagels|pastrami|matzo|matzoh|challah|babka|knish|lox|reuben)\b/, kw:['jewish','deli','bagel','pastrami','matzo','challah','kosher','babka','knish','lox','smoked fish','reuben'], label:'✡ jewish / deli'},
    {re:/\b(date|date night|romantic|anniversary|fancy|special occasion|splurge|impress|celebrate|celebration)\b/, kw:['fine dining','tasting menu','romantic','michelin','date','beautiful'], label:'💛 date night'},
    {re:/\b(cheap|affordable|budget|value|inexpensive|deal|deals)\b/, kw:['affordable','cheap','value','bib gourmand'], label:'💸 cheap eats'},
    {re:/\b(dessert|desserts|sweet|sweets|ice cream|treat|treats|cake|cakes|chocolate|churro|churros|donut|doughnut|pastry|pastries|cheesecake)\b/, kw:['dessert','ice cream','pastry','cake','chocolate','churro','doughnut','soft serve','cheesecake','sweet'], label:'🍰 sweets'},
    {re:/\b(brunch|breakfast|pancake|pancakes|morning|omelette|omelet)\b/, kw:['brunch','breakfast','pancake','benedict','morning bun','omelette'], label:'🍳 brunch'},
    {re:/\b(healthy|salad|salads|light|fresh|poke|grain bowl)\b/, kw:['salad','healthy','bowl','fresh','poke'], label:'🥗 healthy'},
    {re:/\b(spicy|spice|szechuan|sichuan)\b/, kw:['spicy','chile','sichuan','szechuan','hot'], label:'🌶 spicy'},
    {re:/\b(seafood|oyster|oysters|fish|crab|shrimp|ceviche|lobster)\b/, kw:['seafood','oyster','fish','crab','shrimp','ceviche','lobster'], label:'🦪 seafood'},
    {re:/\b(gluten ?free|celiac)\b/, kw:['gluten-free','gluten free'], label:'🌾 gluten-free'}
  ];
  // dish → cuisine/keyword expansion so specific dishes ("quesadilla", "pho", "banh mi") find the right spots
  const DISH_MAP={
    quesadilla:['mexican','taqueria','taco','burrito'],enchilada:['mexican','taqueria'],tamale:['mexican','taqueria'],
    nachos:['mexican','taqueria'],birria:['mexican','taqueria','taco'],carnitas:['mexican','taqueria'],mole:['mexican','oaxacan'],
    pupusa:['salvadoran','latin american'],empanada:['argentine','latin american'],arepa:['venezuelan','latin american'],
    pho:['vietnamese'],'banh mi':['vietnamese','sandwich'],bao:['chinese','taiwanese'],'dim sum':['chinese','cantonese'],
    dumpling:['chinese','dumplings'],'hot pot':['chinese','sichuan'],congee:['chinese'],ramen:['japanese','ramen'],
    sushi:['japanese','sushi'],udon:['japanese'],soba:['japanese'],katsu:['japanese'],tempura:['japanese'],teriyaki:['japanese'],
    curry:['indian','thai'],biryani:['indian'],naan:['indian'],dosa:['indian','south indian'],samosa:['indian'],
    falafel:['middle eastern','mediterranean'],shawarma:['middle eastern'],kebab:['middle eastern','persian'],
    hummus:['middle eastern','mediterranean'],gyro:['greek','mediterranean'],paella:['spanish'],tapas:['spanish'],
    pierogi:['polish','eastern european'],schnitzel:['german','austrian'],poke:['hawaiian','poke'],bibimbap:['korean'],
    bulgogi:['korean'],kimchi:['korean'],pizza:['pizza','italian'],pasta:['italian'],lasagna:['italian'],risotto:['italian'],
    gnocchi:['italian'],gumbo:['cajun','creole','southern'],jambalaya:['cajun','creole'],brisket:['bbq','barbecue','texas'],
    ribs:['bbq','barbecue'],'fried chicken':['southern','fried chicken'],wings:['wings'],'po boy':['cajun','sandwich'],
    oyster:['seafood','oysters'],ceviche:['peruvian','seafood'],gelato:['dessert','ice cream'],croissant:['bakery','french'],
    pretzel:['german','bakery'],laksa:['malaysian','singaporean'],satay:['indonesian','thai'],'pad thai':['thai']
  };
  function expandDishes(q,foods,kw){
    let hit=false;
    for(const d in DISH_MAP){ if(q.includes(' '+d)){ hit=true; DISH_MAP[d].forEach(k=>kw.add(k)); foods.add('restaurant'); } }
    return hit;
  }
  function parseQuery(raw){
    const q=' '+raw.toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ')+' ';
    const regions=new Set(), foods=new Set(), kw=new Set(); const conceptLabels=[];
    for(const reg in REGION_SYN) if(REGION_SYN[reg].some(s=>q.includes(' '+s+' ')||q.includes(' '+s))) regions.add(reg);
    for(const ft in FOOD_SYN) if(FOOD_SYN[ft].some(s=>q.includes(' '+s))) foods.add(ft);
    CONCEPTS.forEach(c=>{ if(c.re.test(q)){ c.kw.forEach(k=>kw.add(k)); conceptLabels.push(c.label); if(c.food) foods.add(c.food); } });
    if(expandDishes(q,foods,kw) && !conceptLabels.length) conceptLabels.push('🍽️ dish');
    let terrain=null;
    if(/\b(flat|easy|mellow|casual|chill|beginner|gentle|relaxed)\b/.test(q)) terrain='flat';
    if(/\brolling\b/.test(q)) terrain=terrain||'rolling';
    if(/\b(hill|hills|hilly|climb|climbs|climbing|steep|hard|epic|mountain|mountains|tough|queen|wall)\b/.test(q)) terrain='hilly';
    let distance=null;
    if(/\b(short|quick|little|spin)\b/.test(q)) distance='short';
    if(/\b(long|century|big|all day|all-day)\b/.test(q)) distance='long';
    const michelin=/\bmichelin|bib\b/.test(q), chronicle=/\bchronicle|top 100\b/.test(q);
    let dest=null;
    if(/to (san francisco|sf)\b/.test(q)||/(into|toward|towards) (san francisco|sf)/.test(q)) dest='SF';
    if(/to santa cruz|(into|toward|towards) santa cruz/.test(q)) dest='SantaCruz';
    const stop=new Set(['the','and','way','ride','route','routes','with','near','for','some','want','find','get','best','good','nice','can','you','rides','bike','biking','cycling','that','have','has','from','food','place','places','spot','spots','where','out','how','let','lets','somewhere','eat','eats']);
    // don't let region words double-count as keywords (region is scored separately)
    raw.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).forEach(w=>{ if(w.length>2&&!stop.has(w)&&!REGIONWORDS.has(w)){ kw.add(w); if(w.length>4&&w.endsWith('s')) kw.add(w.slice(0,-1)); } });
    return {raw,regions,foods,terrain,distance,michelin,chronicle,dest,kw:[...kw],conceptLabels};
  }
  return { parseQuery, REGION_SYN, REGIONWORDS, FOOD_SYN, CONCEPTS, DISH_MAP };
});
