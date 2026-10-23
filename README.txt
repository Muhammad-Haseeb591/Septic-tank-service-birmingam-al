OCALA SEPTIC - SVELTE + TAILWIND WEBSITE
========================================

WHAT THIS IS
The Ocala septic homepage rebuilt as a Svelte 5 + Tailwind CSS v4
project (Vite). Same content, same keyword system, premium dark-navy
+ signal-orange lead-gen theme, improved responsive design including
a sticky mobile call bar.

QUICK START
  1. Install Node.js 18 or newer.
  2. cd ocala-septic-svelte
  3. npm install
  4. npm run dev      (local preview with hot reload)
  5. npm run build    (outputs the finished site to dist/)
  6. Upload the dist/ folder to any static host.

PROJECT LAYOUT
  index.html                  Page shell: title, meta, fonts, JSON-LD schema
  src/main.js                 App entry
  src/app.css                 Tailwind import + brand theme + small customs
  src/App.svelte              Page assembly
  src/data.js             Phone number, services, FAQs, costs - edit here
  src/icons.js            SVG icon set
  src/components/         Header, Hero, Emergency, WarningSigns,
                              Services, Process, Diagram, Local, Costs,
                              Faq, FinalCta, Footer, MobileCallBar
  public/hero.jpg             Hero photo (copied to dist/ on build)
  public/images/              Service + location images (referenced by MD files)
  src/content/services/*.md       Service page copy (source of truth)
  src/content/locations/*.md      Location page copy (source of truth)
  scripts/build-content.mjs   Converts the MD files to src/content/pages.js
  src/pages/              Home, AboutUs, ContentPage (renders all MD pages),
                              ComingSoon (fallback route)

BEFORE YOU PUBLISH
  1. PHONE: edit PHONE_DISPLAY and PHONE_TEL in src/data.js -
     every call button on the site updates at once.
  2. BUSINESS NAME: replace [BUSINESS NAME] in index.html (JSON-LD)
     and src/components/Footer.svelte. Fill in only what is true.
  3. CANONICAL + JSON-LD URL: replace https://example.com/ in index.html.
  4. BUSINESS MODEL: decide how the site presents itself and keep the
     disclosure honest everywhere.

CONTENT PIPELINE (service + location pages — 13 pages live)
  Page content lives in src/content/services/*.md and src/content/locations/*.md
  (the same depth-checked files as ocala-septic-content.zip).
  Page images live in public/images/.
  - Edit any MD file, then run: npm run content:build
    (regenerates src/content/pages.js — do not edit it by hand)
  - npm run build runs content:build automatically first.
  - To add a new page: copy an MD file in src/content/, follow its
    frontmatter + heading structure, run npm run content:build.
    The route appears automatically from the slug. Design comes
    from src/pages/ContentPage.svelte, so new pages always
    match the site.
  - Navbar dropdowns (Services, Locations) read from src/data.js
    (services[] and locations[]), so new entries appear automatically.

ADDING A NEW PAGE (THE LOOK NEVER CHANGES)
  Service/location pages are data-driven. To add one:
  1. Copy an MD file in src/content/services/ or src/content/locations/.
  2. Follow its frontmatter + heading structure (H1, intro, sections,
     FAQ section, final CTA section). Keep the keyword rules below.
  3. Add the page's image to public/images/ and reference it.
  4. Run: npm run content:build   (route appears automatically)
  5. npm run build
  The design comes from src/pages/ContentPage.svelte - a new page
  cannot look different. To add it to the navbar dropdowns, add an
  entry to services[] or locations[] in src/data.js.
  Fully custom pages (like AboutUs): create src/pages/<Name>.svelte
  using <Layout> + <PageHero> + <CtaBand>, then add a <Route> in
  src/App.svelte. Design tokens (colors, fonts) live in src/app.css
  under @theme - change them in that one place and the whole site
  updates together.

HOUSE RULES (from the owner)
  - Primary "septic tank service ocala": 4-5x per page (H1 + bottom),
    NEVER in <title>. Title uses a variation, unique per page.
  - Secondary "ocala septic tank service": 2-3x, one in an H2.
  - No em dashes anywhere in copy. No AI-filler language.
  - Every factual claim comes from the research. No invented prices,
    reviews, warranties, licenses, or job history.
  - Regulatory facts: Marion County permits go through the Marion
    County Health Department. FDEP enforces statewide rules since
    July 1, 2021. No mandatory pump-out law in Florida. EPA guidance:
    pump every 3-5 years.
