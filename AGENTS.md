<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Diff Shuttle - AGENTS.md

## Project Overview

Diff Shuttle — a free, browser-based text and code comparison tool. Built with Next.js 16 + React 19, deployed to Cloudflare Pages via static export.

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Deploy to Cloudflare | `npm run deploy` |

- `npm run build` compiles and checks types.
- There is **no test suite** configured.

## Architecture

- `app/` — Next.js App Router
  - `app/layout.tsx` — Root layout (metadata, JSON-LD, ThemeProvider)
  - `app/[locale]/` — i18n routes
    - `layout.tsx` — Locale layout (NextIntlClientProvider, Header, Footer)
    - `page.tsx` — Homepage with DiffEditor tool
    - `about/` — About page with FAQ schema
    - `privacy/` — Privacy policy
    - `terms/` — Terms of service
    - `tools/` — Layer 4 SEO landing pages
- `components/` — React components
  - `diff-editor.tsx` — Main diff input component
  - `diff-result.tsx` — Diff result display
  - `diff-controls.tsx` — Diff mode/view controls
  - `diff-stats.tsx` — Statistics display
  - `AboutFaq.tsx` + `AboutFaqData.tsx` — FAQ data and rendering
  - `ui/` — shadcn components
- `lib/` — Shared utilities
  - `diff-engine.ts` — Core diff algorithm (npm 'diff' library)
  - `constants.ts` — Constants
  - `utils.ts` — `cn()` utility
- `i18n/` — next-intl configuration
  - `routing.ts` — Locale routing (`en`, `zh`, `as-needed`)
  - `request.ts` — Server-side translations
  - `navigation.ts` — Link, useRouter, etc.
- `messages/` — Translation files (en.json, zh.json)

## i18n

- URL-based with next-intl (`localePrefix: "as-needed"`)
- Default locale: `en` (served at `/`)
- Chinese: `zh` (served at `/zh`)
- Layer 4 pages: English only (`/tools/*`)
- Server components: `getTranslations({ locale, namespace })` 
- Client components: `useTranslations("namespace")`
- **Always add both `en` and `zh` entries** when adding UI text

## Diff Engine

- Uses npm `diff` library for comparison algorithms
- Supports: text (line-by-line), word, character, JSON, CSV
- JSON mode: auto-formats before comparison
- CSV mode: line-by-line comparison
- Export: text format with statistics

## UI Conventions

- Tailwind CSS v4 + shadcn/ui
- Geist + Geist Mono fonts
- Theme: System/Light/Dark (via `ThemeProvider`)
- Toast: sonner (top-center, richColors, 3s)
- Icons: lucide-react
- Path alias: `@/` maps to project root

## Cloudflare Deployment

- Static export (`output: "export"` in next.config.ts)
- `wrangler.toml` configures static assets only (no worker)
- No middleware (not supported with static export)
- `images.unoptimized: true` in next.config.ts

## SEO

- Layer 1: Homepage (500+ words + tool UI)
- Layer 3: About (FAQPage + HowTo schemas), Privacy, Terms
- Layer 4: 5 tool landing pages (800-1500 words each)
- All pages have proper metadata, canonical URLs, and hreflang
- See `SEO_OVERVIEW.md` for complete asset map

## License

MIT
