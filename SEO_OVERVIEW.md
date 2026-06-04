# SEO Overview: Diff Shuttle

> Strategy: shuttlelab-handbook/playbooks/01-saas-funnel-strategy.md
> Execution playbook: shuttlelab-handbook/playbooks/00-new-saas-project.md

## Project type
- [ ] Hub site (navigation only)
- [x] Free tool
- [ ] Paid SaaS

## Audience target
- [x] Overseas (English-primary)
- [ ] Domestic Chinese (Chinese-primary)
- [ ] Global (both)

## Payment (if paid)
- Processor: None (free tool)
- Pricing: Free
- Refund window: N/A

## i18n strategy
- Implementation: URL-based with next-intl (`localePrefix: "as-needed"`)
- Default locale: `en` (at `/`)
- Secondary locale: `zh` (at `/zh`)
- Layer 4 language: English only

## Path A pages (internal navigation)
- Layer 1: `/` — Homepage with DiffEditor tool (500+ words)
- Layer 3: `/about` — About page with FAQPage + HowTo schemas
- Layer 3: `/privacy` — Privacy policy
- Layer 3: `/terms` — Terms of service

## Path B pages (SEO landing)

All five Layer 4 pages are complete: each has 4 JSON-LD schemas (TechArticle +
HowTo + FAQPage + BreadcrumbList), absolute canonical with trailing slash,
hreflang (en/zh/x-default), and the full section layout (sr-only h1 + visible h1
+ How to + Why + Common Scenarios + Tips + Compared to Alternatives + FAQ + CTA).
Word counts below are measured (visible body ≈ tag-stripped render region;
total = whole file).

| Page | Primary keyword | Schemas | Visible words | Total words |
|------|-----------------|---------|---------------|-------------|
| `/tools/text-diff` | "compare two texts online" | 4 | ~1150 | ~2056 |
| `/tools/code-diff` | "compare code online" | 4 | ~1320 | ~2295 |
| `/tools/json-diff` | "compare JSON online" | 4 | ~1221 | ~2200 |
| `/tools/csv-diff` | "compare CSV files online" | 4 | ~1237 | ~2221 |
| `/tools/image-diff` | "compare images / image diff" | 4 | ~1129 | ~2145 |

> Note: `image-diff` is written honestly as a "coming soon" page. The project
> has **no image comparison implementation** (DiffEditor reads files as text via
> `readAsText`, no image extensions in `SUPPORTED_EXTENSIONS`, no image diff
> mode). The page explains image diffing, recommends external tools for raster
> images, and routes users to the existing Text Diff for SVG/base64 markup.
> It must be updated with real upload-and-compare instructions if/when a visual
> image feature ships.

## Schemas applied
- [x] SoftwareApplication (root layout)
- [x] FAQPage (about page + all 5 Layer 4 pages)
- [x] HowTo (about page + all 5 Layer 4 pages)
- [x] TechArticle (all 5 Layer 4 pages)
- [x] BreadcrumbList (all 5 Layer 4 pages)

## SEO Assets
- [x] `app/layout.tsx` — Root metadata + JSON-LD SoftwareApplication
- [x] `app/[locale]/layout.tsx` — hreflang + x-default
- [x] `app/sitemap.ts` — All public pages with alternates.languages
- [x] `app/robots.ts` — Allow /, disallow /api
- [x] `app/opengraph-image.tsx` — Dynamic OG image
- [x] `app/manifest.ts` — PWA manifest
- [x] `app/icon-192.png/route.tsx` — PWA icon 192
- [x] `app/icon-512.png/route.tsx` — PWA icon 512
- [x] `app/not-found.tsx` — Custom 404 with cross-promotion

## Known gaps
- [ ] `image-diff`: no real image comparison feature shipped; page is an honest
      "coming soon" explainer. Build the visual diff feature (or keep the page
      truthful) — do not let it drift into claiming functionality that does not exist.
- [ ] Product screenshot needed for Layer 1
- [ ] Google Search Console verification code needed
- [ ] Bing Webmaster Tools submission needed

## Last reviewed: 2026-06-04
