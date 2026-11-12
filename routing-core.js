/* Mapbox public-token handling. No credentials belong in source or share URLs. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.ChudRouting = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  const TOKEN_KEY = 'mapbox_token';
  function tokenError(value) {
    const token = String(value || '').trim();
    if (!token) return 'Enter a public Mapbox token, or close this window to keep browsing without one.';
    if (token.startsWith('sk.')) return 'Secret Mapbox tokens cannot be used in a browser. Use a public token beginning with pk. If you shared a secret token, revoke it in Mapbox.';
    if (!/^pk\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(token)) return 'Use a complete public Mapbox token beginning with pk. Other API keys are not supported.';
    return '';
  }
  function stripTokenParams(href) {
    const url = new URL(href);
    ['token', 'access_token', 'api_key'].forEach(k => url.searchParams.delete(k));
    return url.href;
  }
  function createTokenStore(storage) {
    let current = '';
    let remembered = false;
    try {
      const saved = storage && storage.getItem(TOKEN_KEY);
      if (saved && !tokenError(saved)) { current = saved.trim(); remembered = true; }
    } catch (_) {}
    return {
      get: () => current,
      remembered: () => remembered,
      set(value, remember) {
        const token = String(value || '').trim();
        const error = tokenError(token);
        if (error) throw new Error(error);
        // Remove the old value before changing memory, so failed removal cannot
        // resurrect a supposedly replaced/removed token after a reload.
        if (storage) storage.removeItem(TOKEN_KEY);
        current = token;
        remembered = false;
        if (remember && storage) {
          try { storage.setItem(TOKEN_KEY, token); remembered = true; } catch (_) {}
        }
        return { remembered };
      },
      clear() {
        current = '';
        remembered = false;
        try { if (storage) storage.removeItem(TOKEN_KEY); return true; }
        catch (_) { return false; }
      }
    };
  }
  function requestError(status, code) {
    if (status === 401) return 'Mapbox rejected this token. Check that it is complete and still active.';
    if (status === 403) return 'Mapbox blocked this token. Check its public scopes, allowed website URLs, and account status. Allow https://esigel-stax.github.io for this site.';
    if (status === 429) return 'Mapbox usage limit reached. Check the account limits or try again later.';
    if (code === 'NoRoute' || code === 'NoSegment') return 'Mapbox could not find a cycling route through these points.';
    if (status >= 500) return 'Mapbox is temporarily unavailable. Try again later.';
    return 'Cycling directions are unavailable. Check the token and route points, then try again.';
  }
  async function fetchCyclingRoute(coords, token, fetcher) {
    const error = tokenError(token);
    if (error) throw new Error(error);
    if (!Array.isArray(coords) || coords.length < 2 || coords.length > 25) throw new Error('Cycling directions require 2–25 waypoints. Remove some food stops and try again.');
    if (!coords.every(c => Array.isArray(c) && c.length === 2 && c.every(Number.isFinite) && Math.abs(c[0]) <= 180 && Math.abs(c[1]) <= 90)) throw new Error('The route contains invalid coordinates.');
    const url = new URL('https://api.mapbox.com/directions/v5/mapbox/cycling/' + coords.map(c => c.join(',')).join(';'));
    Object.entries({geometries:'geojson', overview:'full', steps:'true', voice_instructions:'true', banner_instructions:'true', voice_units:'imperial', access_token:token.trim()}).forEach(([key,value]) => url.searchParams.set(key,value));
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetcher(url.href, {signal:controller.signal, cache:'no-store', referrerPolicy:'origin'});
      let body;
      try { body = await response.json(); } catch (_) { throw new Error('Mapbox returned an unreadable response. Try again later.'); }
      if (!response.ok || body.code !== 'Ok' || !body.routes || !body.routes[0]) throw new Error(requestError(response.status, body.code));
      const route = body.routes[0];
      if (!route.geometry || !Array.isArray(route.geometry.coordinates) || !Array.isArray(route.legs)) throw new Error('Mapbox returned incomplete cycling directions. Try again later.');
      return route;
    } catch (error) {
      if (error.name === 'AbortError') throw new Error('Mapbox took too long to respond. Check your connection and try again.');
      if (error instanceof TypeError) throw new Error('Could not reach Mapbox. Check your connection or content blocker.');
      throw error;
    } finally { clearTimeout(timer); }
  }
  return { tokenError, stripTokenParams, createTokenStore, fetchCyclingRoute, requestError };
});
