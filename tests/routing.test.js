import { describe, it, expect, vi } from 'vitest';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const { tokenError, stripTokenParams, createTokenStore, fetchCyclingRoute } = require('../routing-core.js');
const TOKEN = 'pk.test_public.token_for_unit_tests'; // Deliberately not a real token.
const POINTS = [[-122.45,37.77],[-122.46,37.77]];
const route = {distance:1000, geometry:{type:'LineString',coordinates:POINTS},legs:[{steps:[]}]};
const memory = (value='') => {const data = new Map(value?[['mapbox_token',value]]:[]); return {getItem:k=>data.get(k), setItem:(k,v)=>data.set(k,v), removeItem:k=>data.delete(k)};};
const response = (status=200,body={code:'Ok',routes:[route]}) => ({ok:status>=200&&status<300,status,json:async()=>body});
describe('public tokens', () => {
  it('accepts a trimmed public token',()=>expect(tokenError(' '+TOKEN+' ')).toBe(''));
  it.each(['', 'sk.secret.do_not_send', 'AIza-not-mapbox', 'pk.incomplete', TOKEN+'&extra=true', TOKEN+'\nother'])('rejects invalid/secret token %s', t=>expect(tokenError(t)).not.toBe(''));
  it('strips URL credentials while preserving share state',()=>{
    const url = new URL(stripTokenParams('https://example.com/?token=secret&access_token=secret&api_key=secret&ride=Marin#bucket'));
    expect(url.search).toBe('?ride=Marin'); expect(url.hash).toBe('#bucket');
  });
});
describe('token storage',()=>{
  it('loads existing public tokens',()=>expect(createTokenStore(memory(TOKEN)).get()).toBe(TOKEN));
  it('never uses existing secret tokens',()=>expect(createTokenStore(memory('sk.secret.value')).get()).toBe(''));
  it('only persists when explicitly selected',()=>{
    const storage=memory(), store=createTokenStore(storage);
    expect(store.set(TOKEN,false)).toEqual({remembered:false}); expect(store.get()).toBe(TOKEN); expect(storage.getItem('mapbox_token')).toBeUndefined();
    expect(store.set(TOKEN,true)).toEqual({remembered:true}); expect(storage.getItem('mapbox_token')).toBe(TOKEN);
  });
  it('can disable remembering an existing token',()=>{const s=memory(TOKEN), t=createTokenStore(s);t.set(TOKEN,false); expect(s.getItem('mapbox_token')).toBeUndefined();});
  it('clear removes both the current and stored token',()=>{const s=memory(TOKEN), t=createTokenStore(s);expect(t.clear()).toBe(true);expect(t.get()).toBe('');expect(createTokenStore(s).get()).toBe('');});
  it('does not claim successful persistence if the browser rejects writes',()=>{
    const s=memory();s.setItem=()=>{throw new Error('blocked');};const t=createTokenStore(s);expect(t.set(TOKEN,true)).toEqual({remembered:false});expect(t.get()).toBe(TOKEN);
  });
  it('can use a page-only token with no storage',()=>{const t=createTokenStore();expect(t.set(TOKEN,true)).toEqual({remembered:false});expect(t.get()).toBe(TOKEN);});
  it('reports unsuccessful clearing without retaining the active token',()=>{const s=memory(TOKEN),t=createTokenStore(s);s.removeItem=()=>{throw Error('blocked');};expect(t.clear()).toBe(false);expect(t.get()).toBe('');});
  it('does not save or replace a valid token with a secret token',()=>{const s=memory(TOKEN), t=createTokenStore(s);expect(()=>t.set('sk.secret.token',true)).toThrow();expect(t.get()).toBe(TOKEN);});
});
describe('cycling API requests',()=>{
  it('uses the cycling endpoint, no-store, and an origin-only referrer',async()=>{
    const fetcher=vi.fn(async()=>response()); expect(await fetchCyclingRoute(POINTS,TOKEN,fetcher)).toEqual(route);
    const [href,options]=fetcher.mock.calls[0],url=new URL(href);
    expect(url.origin).toBe('https://api.mapbox.com');expect(url.pathname).toContain('/mapbox/cycling/');expect(url.searchParams.get('access_token')).toBe(TOKEN);expect(options.cache).toBe('no-store');expect(options.referrerPolicy).toBe('origin');
  });
  it.each([[401,'rejected'],[403,'allowed website URLs'],[429,'usage limit'],[503,'temporarily unavailable']])('explains HTTP %i without echoing credentials',async(status,message)=>{
    const fetcher=vi.fn(async()=>response(status,{code:'Error',message:TOKEN}));await expect(fetchCyclingRoute(POINTS,TOKEN,fetcher)).rejects.toThrow(message);expect(fetcher).toHaveBeenCalledTimes(1);
  });
  it('does not make a network request for secret tokens',async()=>{const f=vi.fn();await expect(fetchCyclingRoute(POINTS,'sk.secret.token',f)).rejects.toThrow('Secret');expect(f).not.toHaveBeenCalled();});
  it('explains no route',async()=>{await expect(fetchCyclingRoute(POINTS,TOKEN,async()=>response(200,{code:'NoRoute'}))).rejects.toThrow('could not find');});
  it('rejects an incomplete provider response',async()=>{await expect(fetchCyclingRoute(POINTS,TOKEN,async()=>response(200,{code:'Ok',routes:[{}]}))).rejects.toThrow('incomplete');});
  it('explains network failures without leaking the request URL',async()=>{await expect(fetchCyclingRoute(POINTS,TOKEN,async()=>{throw new TypeError(TOKEN);})).rejects.toThrow('Could not reach');});
  it('explains timeout',async()=>{await expect(fetchCyclingRoute(POINTS,TOKEN,async()=>{const e=new Error();e.name='AbortError';throw e;})).rejects.toThrow('too long');});
  it.each([[],[[0,0]],Array(26).fill([0,0]),[[NaN,0],[1,1]],[[200,0],[1,1]]])('rejects invalid waypoint lists',async p=>{const f=vi.fn();await expect(fetchCyclingRoute(p,TOKEN,f)).rejects.toThrow();expect(f).not.toHaveBeenCalled();});
});
describe('app integration',()=>{
  const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
  it('all inline scripts parse',()=>{for(const m of html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g))expect(()=>new Function(m[1])).not.toThrow();});
  it('scrubs legacy URLs before external assets load',()=>{
    const script=[...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)][0][1];const replaceState=vi.fn();
    vm.runInNewContext(script,{URL,location:{href:'https://example.com/?token=bad&ride=Marin#bucket'},history:{state:{x:1},replaceState}});
    expect(replaceState).toHaveBeenCalledWith({x:1},'', 'https://example.com/?ride=Marin#bucket');
  });
  it('does not consume URL tokens or retain duplicate click handlers',()=>{expect(html).not.toContain("get('token')");expect(html).not.toContain("wire('tmSave'");});
  it('uses a masked labelled token input and opt-in persistence',()=>{expect(html).toContain('id="tokenInput" type="password"');expect(html).toContain('for="tokenInput"');expect(html).toContain('id="tokenRemember" type="checkbox"/>');});
  it('does not fall back to driving when a configured cycling token fails',()=>{const f=html.match(/async function fetchRoute\(coords\)\{([^\n]+)\}/)[1];expect(f).toContain('return await fetchMapbox');expect(f).not.toContain('catch');});
});
describe('service worker token isolation',()=>{
  it('does not intercept or cache credential-bearing requests',()=>{
    const listeners={},context={URL, Request, self:{addEventListener:(event,fn)=>listeners[event]=fn}};
    vm.runInNewContext(fs.readFileSync(new URL('../sw.js',import.meta.url),'utf8'),context);
    for(const key of ['token','access_token','api_key']){
      const respondWith=vi.fn();listeners.fetch({request:{method:'GET',url:'https://example.com/?'+key+'=redacted'},respondWith});expect(respondWith).not.toHaveBeenCalled();
    }
  });
});
describe('keyless basemap',()=>{
  const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
  const context={window:{}};
  vm.runInNewContext(fs.readFileSync(new URL('../basemap-style.js',import.meta.url),'utf8'),context);
  const style=context.window.CHUD_BASE_STYLE;
  it('uses OpenFreeMap instead of the retired key-required CARTO URLs',()=>{
    expect(style.version).toBe(8);expect(style.sources.openmaptiles.url).toBe('https://tiles.openfreemap.org/planet');expect(html).not.toContain('basemaps.cartocdn.com');
  });
  it('has unique base layers without app overlay collisions',()=>{
    const ids=style.layers.map(l=>l.id);expect(new Set(ids).size).toBe(ids.length);
    for(const id of ['sat','hillshade','routes-line','routes-casing','food','starts','custom'])expect(ids).not.toContain(id);
  });
  it('contains no API credentials and preserves base visibility when changing modes',()=>{
    expect(JSON.stringify(style)).not.toMatch(/access_token|api_key|pk\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/);
    expect(html).toContain("sat?'none':layer.visibility");
  });
  it('ships in the fresh service-worker shell',()=>{const sw=fs.readFileSync(new URL('../sw.js',import.meta.url),'utf8');expect(sw).toContain('chudridez-v6');expect(sw).toContain('./basemap-style.js?v=6');});
});
