# Diff Shuttle

A small web app to compare text, code, JSON, and CSV side by side. Everything runs in the browser; no data is sent to any server.

## Features

- **Five diff modes** – line, word, character, JSON, and CSV comparison via the npm [diff](https://github.com/kpdecker/jsdiff) library
- **Side-by-side / unified views** – switch how differences are displayed
- **Smart options** – ignore whitespace and/or letter case
- **File support** – drop in source files (js, ts, py, go, java, css, md, sql and more), up to 10 MB each
- **Export** – download the diff result with statistics as text
- **Bilingual** – English and Chinese UI

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static export to `out/`.

## License

Licensed under the GNU Affero General Public License v3.0 — see [LICENSE](./LICENSE).

Free to use, modify, and self-host. If you run a modified version as a network service, you must open-source your modifications (AGPL §13). For commercial licensing without copyleft obligations, contact support@shuttlelab.org.
