# solar-sites

Astro monorepo for CegTec GmbH's Solar Match marketing properties. One shared design system, two independent deploys, two domains.

## Sites

| Path | Brand | Domain | ICP |
|---|---|---|---|
| `sites/solar-match/` | **Solar Match** (Marktplatz) | [solar-match.de](https://solar-match.de) | PV-Installateure — qualifizierte Leads kaufen |
| `sites/solar-analyse-tool/` | **Solar Match** (Widget) | [solaranalysetool.com](https://www.solaranalysetool.com) | PV-Installateure — White-Label-Widget für eigene Website |

Solar Match (Marktplatz) and Solar Analyse Tool (Widget) share one brand identity (parent: Solar Match) but keep two domains for keyword SEO.

**Note on Dachpacht Direkt**: `dachpacht-direkt.de` is intentionally *not* part of this monorepo — that site stays on Lovable.

## Shared design system

`packages/ui/` — design tokens, Astro components, layouts. Consumed by both sites via npm workspaces (`@solar/ui`). Petrol + gold palette, Plus Jakarta Sans, semantic HTML, agent-friendly markup (native `<details>` accordions, no client JS for FAQ).

## Development

```bash
npm install
npm run dev:sm     # Solar Match Marktplatz on http://localhost:4321
npm run dev:sat    # Solar Analyse Tool / Widget
npm run build      # Build both
```

Per-site builds: `npm run build:sm` / `build:sat`.

## Agent-friendly (Silicon-Friendly)

Each site ships with:
- Semantic HTML5 + skip link + landmark roles
- JSON-LD: `Organization`, `WebSite`, plus `Product` / `Service` and `FAQPage` per landing
- `robots.txt` explicitly allowing AI/LLM crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot)
- `llms.txt` summary at site root with ICP, product, pricing, cross-brand relations
- `sitemap-index.xml` via `@astrojs/sitemap`
- OG/Twitter meta + canonical URLs

## Deploy

[Render Blueprint](https://render.com/docs/blueprint-spec) at `render.yaml` defines both static sites. Render builds the relevant workspace and serves `dist/`. Custom domains and DNS records configured per service in the Render dashboard.

## Legal entity

Both sites are operated by **CegTec GmbH**, Immenhof 15, 22087 Hamburg · HRB 184866 (Amtsgericht Hamburg) · USt-ID DE366099274 · Geschäftsführer: Luca Ceglie · Kontakt: moin@dachpacht-direkt.de · +49 40 74304626
