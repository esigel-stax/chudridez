# Chudridez → Google Play — step-by-step

Goal: wrap the Chudridez PWA as an Android app (Trusted Web Activity) and publish it. Budget ~$25 one-time + a few hours. You do NOT need Android Studio — PWABuilder does the build in the browser.

---

## 0. Prerequisites (do these first)
- [ ] The PWA changes are LIVE: `manifest.json`, `sw.js`, the icon PNGs uploaded to the repo, and the `<head>` + service-worker `<script>` snippets pasted into `index.html`. Confirm at https://esigel-stax.github.io/chudridez/ — open Chrome DevTools → Application → Manifest and check there are no errors.
- [ ] Run **Lighthouse** (DevTools → Lighthouse → Progressive Web App). You want it installable with no red flags.

## 1. Decide your domain (important — read this)
Trusted Web Activities verify ownership at the **root** of the origin: `https://<origin>/.well-known/assetlinks.json`. Your app lives in a subfolder (`/chudridez/`), so the file must sit at:

`https://esigel-stax.github.io/.well-known/assetlinks.json`

That root belongs to your **user Pages site**, not the chudridez repo. Two ways to handle it:

**Option A — free, keep github.io (recommended to start).**
1. Create a new repo named exactly `esigel-stax.github.io` (if you don't already have one).
2. In it, add the file `.well-known/assetlinks.json` (contents from Step 3) and an empty `.nojekyll` file at the root (so GitHub serves the dot-folder).
3. Enable Pages on that repo. The file will be live at `https://esigel-stax.github.io/.well-known/assetlinks.json`.

**Option B — custom domain (nicer for a store listing, ~$12/yr).**
Buy e.g. `chudridez.com`, point it at GitHub Pages, set it as the custom domain on the chudridez repo. Then the app is at `https://chudridez.com/` and assetlinks lives at `https://chudridez.com/.well-known/assetlinks.json` — all in one repo you fully control. Cleaner, but optional.

*(Start with A; you can switch to B later.)*

## 2. Generate the Android package (PWABuilder)
1. Go to **https://www.pwabuilder.com** and enter your live URL (`https://esigel-stax.github.io/chudridez/`).
2. Click **Package for stores → Android → Generate**.
3. In the Android options set:
   - **Package ID**: `app.chudridez.twa` (must be unique & permanent — pick it carefully).
   - **App name**: Chudridez
   - **Launcher name**: Chudridez
   - Signing key: **let PWABuilder create a new one** (this is your upload key — see Step 4).
4. Download the ZIP. It contains: the `.aab` (upload this to Play), the signing key (`.keystore` + passwords in `signing-key-info.txt`), and a ready-made **`assetlinks.json`** with your real fingerprint already filled in.

## 3. Publish the assetlinks.json
- Take the `assetlinks.json` from the PWABuilder ZIP (it already has the correct `sha256_cert_fingerprints`).
- Put it at the `.well-known/` path you chose in Step 1, commit, and confirm it loads in a browser (raw JSON, no 404).
- The template in `assetlinks-TEMPLATE.json` shows the shape if you ever need to edit it by hand — the fingerprint comes from PWABuilder (or from Play's App Signing page later).

## 4. BACK UP THE SIGNING KEY
- Save the `.keystore` file and its passwords somewhere safe (password manager + a backup). **If you lose this key you can never update the app** under the same listing. This is the single most common painful mistake — do it now.

## 5. Create the Play Console account
- Sign up at **https://play.google.com/console** — **$25 one-time** fee.
- Personal accounts created now must complete **closed testing with ~12 testers for 14 continuous days** before you're allowed to publish to production. Line up 12 people (friends, an email list) early — this is the real bottleneck, not the tech.

## 6. Fill in the store listing (assets are ready in your Downloads)
- [ ] **App icon**: `play-store-icon-512.png` (512×512)
- [ ] **Feature graphic**: `play-feature-graphic-1024x500.png` (1024×500)
- [ ] **Phone screenshots**: min 2 (take these from the app — Chrome DevTools device mode or a real phone; 1080×1920 works). Grab the map, a route detail, and the bucket list.
- [ ] Short description (≤80 chars) + full description.
- [ ] **Privacy policy URL** — required. Since the app calls OSRM, Open-Meteo, and the SF Chronicle feed and stores data only in the browser, a short page stating "no personal data collected; map/routing requests go to third-party tile/routing services" is enough. Host it as `privacy.html` in your repo.
- [ ] Content rating questionnaire, Data safety form (declare: no data collected/shared), target audience.

## 7. Upload & test
- Create a **Closed testing** release → upload the `.aab` → add your testers → run the 14-day test.
- On a tester phone, confirm the app opens **full-screen with no browser address bar**. If you see a URL bar, assetlinks verification failed — re-check Step 3 (right path, valid JSON, fingerprint matches Play's App Signing key).

## 8. Go to production
- After the testing window, promote the release to **Production**, submit for review (usually 1–7 days), and you're live.

---

### Draft store text (edit freely)
**Short:** Plan Bay Area bike rides paired with great food — 79 routes, offline maps.

**Full:** Chudridez maps 79 hand-picked Bay Area road-cycling routes across Marin, SF & the Peninsula, the East Bay, South Bay, and the Santa Cruz Mountains — each rated for difficulty and safety, with the reason it's worth riding. Pair any ride with 1,300+ cyclist-friendly food and drink stops, build a bucket list that reroutes through your picks, export GPX, and follow turn-by-turn directions with voice. Works offline once loaded. No account, no ads.

### The common failure to watch for
If the installed app shows a browser address bar, it's always the same cause: `assetlinks.json` isn't reachable at the origin root, or its fingerprint doesn't match. Everything else is straightforward.
