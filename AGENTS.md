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
| Lint | `npm run lint` (runs `eslint`) |

- `npm run build` = `next build && node scripts/postbuild.mjs`. `next build` type-checks and statically exports to `out/`; the postbuild step then rewrites that output (see **Build pipeline** below). Always run the full `npm run build` — `next build` alone produces a broken `out/`.
- There is **no test suite** and **no `deploy` script**. Deploy with `npx wrangler pages deploy out` (or via the Cloudflare dashboard) after building.

## Build pipeline

`scripts/postbuild.mjs` runs after `next build` and is load-bearing — the static export does not match the site's own metadata without it:

1. **Promotes `out/en/*` → `out/`** and deletes `out/en`. With `localePrefix: "as-needed"`, Next emits English under `out/en/`, but every canonical/hreflang/sitemap URL declares English at the web root. This makes the output match.
2. **Patches `<html lang>`** from `en` to `zh-CN` across `out/zh/**/*.html`.
3. **Generates `out/sw.js`** — a service worker with a precache list derived from the actual emitted routes (cache-first for `/_next/static/`, network-first for navigations, stale-while-revalidate for everything else). Cache name is versioned per build.

## Architecture

- `app/` — Next.js App Router
  - `app/layout.tsx` — Root layout (`<html lang="en">`, metadata, JSON-LD, `ThemeProvider`, `ServiceWorkerRegister`, sonner `Toaster`)
  - `app/manifest.ts`, `app/icon-192.png/route.tsx`, `app/icon-512.png/route.tsx` — PWA manifest + dynamically generated icons
  - `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/not-found.tsx` — SEO/PWA route handlers
  - `app/[locale]/` — i18n routes
    - `layout.tsx` — Locale layout (NextIntlClientProvider, Header, Footer)
    - `page.tsx` — Homepage with DiffEditor tool
    - `about/` — About page with FAQ schema
    - `privacy/` — Privacy policy
    - `terms/` — Terms of service
    - `tools/` — Layer 4 SEO landing pages (English only): `code-diff`, `csv-diff`, `image-diff`, `json-diff`, `text-diff`
- `components/` — React components
  - `diff-editor.tsx` — Main diff input component
  - `diff-result.tsx` — Diff result display
  - `diff-controls.tsx` — Diff mode/view controls
  - `diff-stats.tsx` — Statistics display
  - `home-content.tsx` / `layout-shell.tsx` — homepage body and shared page chrome
  - `theme-sync.tsx` — `ThemeProvider` + `useTheme()` (custom; no `next-themes`)
  - `palette-picker.tsx` — combined light/dark/system + accent-palette popover
  - `service-worker-register.tsx` — registers `/sw.js` on the client
  - `AboutFaq.tsx` + `AboutFaqData.tsx` — FAQ data and rendering
  - `ui/` — shadcn components (built on `@base-ui/react` primitives, not Radix)
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

- Tailwind CSS v4 + shadcn/ui, with shadcn components wrapping `@base-ui/react` primitives
- Geist + Geist Mono fonts
- Theme is custom (`components/theme-sync.tsx`), not `next-themes`:
  - **Mode**: System/Light/Dark, persisted in `localStorage["theme"]`, applied by toggling `.dark` on `<html>`. `system` stores nothing and follows `prefers-color-scheme`.
  - **Palette**: 6 accent palettes (`default`, `sakura`, `mint`, `ocean`, `sunset`, `graphite`), persisted in `localStorage["palette"]`, applied via `<html data-palette>` (default uses no attribute). Add a new palette in the `PALETTES` array **and** define its `[data-palette=…]` tokens in `app/globals.css`.
- Toast: sonner (top-center, richColors, 3s)
- Icons: lucide-react
- Path alias: `@/` maps to project root

## Cloudflare Deployment

- Static export (`output: "export"` in next.config.ts), `trailingSlash: true`, `images.unoptimized: true`
- `wrangler.toml` serves `./out` as static assets only (no worker)
- No middleware (not supported with static export)
- PWA: service worker generated at postbuild (`out/sw.js`), registered by `service-worker-register.tsx`

## SEO

- Layer 1: Homepage (500+ words + tool UI)
- Layer 3: About (FAQPage + HowTo schemas), Privacy, Terms
- Layer 4: 6 tool landing pages (800-1500 words each)
- All pages have proper metadata, canonical URLs, and hreflang
- See `SEO_OVERVIEW.md` for complete asset map

## License

AGPL-3.0-only
