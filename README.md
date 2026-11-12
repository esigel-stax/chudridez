# Chudridez

Bay Area bicycle rides and food stops. Static GitHub Pages app.

## Run and test

- `npm install`
- `npm run dev`
- `npm test`
- `npm run build`

Production serves the repository root on the `main` branch; no build secrets are needed.

## Keyless basemap

The old CARTO raster URLs now return “API KEY REQUIRED” placeholder images. The app uses [OpenFreeMap](https://openfreemap.org/) public vector tiles instead, retaining a dark style and the Map, Satellite, and 3D terrain modes. No account, API key, or payment is needed for the basemap. The provider has no availability SLA.

`basemap-style.js` is a local snapshot of the provider's dark style. Its license is in `BASEMAP-LICENSE.md`; source attribution is displayed on the map. Service-worker v7 clears the old cached placeholder tiles.

## Navigation tokens

Map browsing and search require no API key. In-app cycling navigation uses an optional **public Mapbox token** beginning with `pk.`. The token is checked with a short, fixed cycling request before it is used. A failed check never replaces the current token.

Use Navigation settings to enter your own public token. It stays in memory for the current page unless you explicitly select **Remember on this browser**. Remove token clears memory and saved browser storage. Credentials in legacy URL query parameters are ignored and removed from the visible URL; never send tokens in share links. A URL already sent to the hosting provider or recorded in browser history cannot be retroactively unshared.

Use a dedicated public token with minimal public scopes and URL restrictions for `https://esigel-stax.github.io`. Include an explicit localhost URL only for development. Secret `sk.` tokens and other providers’ keys are rejected. Do not commit credentials or place server secrets in the frontend. Public Mapbox tokens are browser-visible by design; URL restrictions and account usage limits protect against abuse. Mapbox pricing and account limits apply.

Keyless OSRM directions are **car-route previews**, not cycling guidance. They are labelled accordingly and cannot start in-app live cycling navigation. The app provides an **Open in Google Maps** cycling link without requiring an API key. That link uses up to three intermediate points for mobile compatibility; check the separately generated route and stops before riding.

If Mapbox rejects a configured token, the app displays the cause (invalid token, URL/scope restriction, usage limit, or unavailable service) instead of silently switching to driving directions. API responses and token-bearing URLs are not cached by the service worker.

Mapbox references: [Token security](https://docs.mapbox.com/help/dive-deeper/how-to-use-mapbox-securely/) · [Directions API](https://docs.mapbox.com/api/navigation/directions/).
