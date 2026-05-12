# solar-sites

Astro monorepo for CegTec GmbH's three solar properties. One shared design system, three independent deploys, three domains.

## Sites

| Path | Brand | Domain | ICP |
|---|---|---|---|
| `sites/solar-match/` | **Solar Match** (Marktplatz) | [solar-match.de](https://solar-match.de) | PV-Installateure — qualifizierte Leads kaufen |
| `sites/solar-analyse-tool/` | **Solar Match** (Widget) | [solaranalysetool.com](https://www.solaranalysetool.com) | PV-Installateure — White-Label-Widget für eigene Website |
| `sites/dachpacht-direkt/` | **Dachpacht Direkt** | [dachpacht-direkt.de](https://dachpacht-direkt.de) | Dacheigentümer — Gewerbedach zur PV-Vermietung anbieten |

Solar Match + Solar Analyse Tool share one brand identity (parent: Solar Match) but keep two domains for keyword SEO. Dachpacht Direkt is its own brand, sharing only the design tokens.

## Shared design system

`packages/ui/` — design tokens, Astro components, layouts. Consumed by all three sites via npm workspaces (`@solar/ui`). Petrol + gold palette, Plus Jakarta Sans, semantic HTML, agent-friendly markup (native `<details>` accordions, no client JS for FAQ).

## Development

```bash
npm install
npm run dev:sm     # Solar Match Marktplatz on http://localhost:4321
npm run dev:sat    # Solar Analyse Tool / Widget
npm run dev:dd     # Dachpacht Direkt
npm run build      # Build all three
```

Per-site builds are also available via `npm run build:sm` / `build:sat` / `build:dd`.

## Agent-friendly (Silicon-Friendly)

Each site ships with:
- Semantic HTML5 + skip link + landmark roles
- JSON-LD: `Organization`, `WebSite`, plus `Product` / `Service` and `FAQPage` per landing
- `robots.txt` explicitly allowing AI/LLM crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot)
- `llms.txt` summary at site root with ICP, product, pricing, cross-brand relations
- `sitemap-index.xml` via `@astrojs/sitemap`
- OG/Twitter meta + canonical URLs

## Deploy

[Render Blueprint](https://render.com/docs/blueprint-spec) at `render.yaml` defines all three static sites. Render builds the relevant workspace and serves `dist/`. Custom domains and DNS records configured per service in the Render dashboard.

## Legal entity

All three sites are operated by **CegTec GmbH**, Immenhof 15, 22087 Hamburg · HRB 184866 (Amtsgericht Hamburg) · USt-ID DE366099274 · Geschäftsführer: Luca Ceglie · Kontakt: moin@dachpacht-direkt.de · +49 40 74304626
