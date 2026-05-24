# Unrig USA — static site

Pure static HTML/CSS. No build step. Deploys directly to Cloudflare Pages.

## Run locally

```sh
cd UnrigUSA
python3 -m http.server 8080
# open http://localhost:8080
```

The shared header/footer are injected via `assets/js/include.js` (fetches `partials/*.html`). This means **you must serve over HTTP** — opening `index.html` via `file://` will block the fetch and the header/footer won't render.

## Tree

```
UnrigUSA/
  index.html              Home — "RIGGED. Revolution Required."
  about.html              Team bios (Brittany, JC, Joy, Kevin, Matt, Terri)
  the-problem.html        The Problem
  safeguards.html         Anti-Corruption Safeguards Hub (4 pillars)
  action.html             Take Action — paths + People's Proclamation pledge
  coalition.html          Coalition partners + organization registration
  dashboard.html          Member Dashboard preview (no auth)
  contact.html            Email contact
  privacy.html            Privacy
  transparency.html       Transparency
  faq.html                FAQ
  CREDITS.md              Credits
  _redirects              Cloudflare Pages redirects
  robots.txt              Allows all crawlers; points to sitemap
  sitemap.xml             10-URL sitemap for Google
  llms.txt                AI/LLM discovery convention (Anthropic, Perplexity, etc.)
  partials/
    header.html           Canonical sticky glass header (5 nav links + Donate CTA)
    footer.html           Canonical 4-column footer + 9 social icons + n8n signup
  assets/
    css/federalist.css    Design tokens, type, components
    js/include.js         Tiny client-side partial-include helper
    images/               Hero and section imagery
    logos/                Brand marks and favicon
    team/                 Team photos (Brittany, JC, Joy, Kevin, Matt, Terri)
  docs/                   Working source material (bios, ideas, reference assets) — not deployed
```

## Discovery files

- **`robots.txt`** — controls crawler access. Allows everything except `/partials/` (those aren't pages). Points to the sitemap.
- **`sitemap.xml`** — lists all 10 pages with priorities and change frequencies. **This is what helps Google indexing and Google Ad Grants performance.** Submit it once via Google Search Console after deploy.
- **`llms.txt`** — emerging convention for LLM crawlers (Anthropic, Perplexity, OpenAI). Provides a curated, high-signal summary so AI search results cite the site accurately. Does **not** affect Google ranking, but does affect how the site shows up in AI-generated answers.

> Note: Replace `https://unrigusa.org/` in `sitemap.xml` and `llms.txt` if the production domain differs.

## Design system

"Modern Federalist" — see `assets/css/federalist.css`. Key tokens:

- Colors: Unity Blue `#00153e`, Civic Red `#ba022d`, Parchment `#fcf9f2`, Ink `#1c1c18`
- Type: Newsreader (display) + Public Sans (body), via Google Fonts
- No 1px borders — sectioning by surface tier
- Buttons have a 2px Civic Red bottom edge ("seal")
- Subtle parchment noise overlay applied via `body::before`

## Forms

All signup forms (`hero-signup`, `proclamation-form`, `coalition-form`, footer) POST to `https://n8n.cloudpublica.org/webhook/unrig-signup` with a `source` field for routing.

## Deploy to Cloudflare Pages

```sh
npx wrangler pages deploy . --project-name unrig-usa --branch main --commit-dirty=true
```

(Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in env.)
