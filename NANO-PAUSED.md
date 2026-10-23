# Nano pages — PAUSED (per his instruction, 2026-10-23 ~03:41 UTC)

He said: "abhi ke lie ise rok do" (hold the nano work for now) and asked for the
pre-nano zip. Nano work is STOPPED, not deleted. Nothing nano ships until he says go.

## What exists (preserved, ready to resume)

- `src/content/nano/` — 15 nano page sources (.md), KWS volumes verified:
  septic tank cleaning (22,200/mo), lid replacement (2,900), leach field repair
  (2,900), pump repair (2,400), pump replacement (1,000), aerobic system (1,000), +9 more
- `src/content/pages/nano--*.js` — 15 generated page modules
- `src/content/manifest.js` — 15 `/nano/...` routes registered
- 9 parent service pages (`src/content/pages/*.js` + `src/content/services/*.md`)
  contain "Related Septic Services" link blocks pointing at /nano/ URLs
- `public/images/nano/` — 15 nano images
- `public/sitemap.xml` — 59 URLs (44 + 15 nano)

## Snapshots in ~/workspace/your_files/

- `birmingham-septic-full.zip` (49MB, 2026-10-23 03:41 UTC) — nano-INCLUSIVE version
- `birmingham-previous.zip` (40.6MB, 2026-10-23 03:41 UTC) — STALE, do NOT deploy:
  missing breadcrumbs, navbar brand name, and the Option-3 logo he approved
  (built from a ~02:15 UTC snapshot, not the true pre-nano state)
- `birmingham-clean-44page.zip` (43.8MB, 2026-10-23 04:32 UTC) — CORRECT pre-nano
  build: all his fixes present (breadcrumbs, navbar brand, Option-3 logo, favicon,
  green/gold theme), 0 nano references, 44-URL sitemap. THIS is the deploy copy.

## To resume nano later

Nothing to rebuild — the work above is intact. Zip `birmingham-septic-full.zip`
already contains it, or re-run `npm run content:build` (reads `src/content/nano/`).

## To permanently drop nano

Delete `src/content/nano/*.md`, `public/images/nano/`, remove the
"## Related Septic Services" sections from the 9 service .md files, re-run
`node scripts/build-content.mjs`, and strip the /nano/ <url> blocks from
`public/sitemap.xml`. (This exact procedure was used to build
`birmingham-clean-44page.zip`; verified 0 nano refs, 42/42 page modules valid.)
