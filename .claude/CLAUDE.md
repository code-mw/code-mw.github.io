# code-mw.github.io

Astro + Tailwind CSS v4 personal site / CV. Deployed to GitHub Pages via GHA.

## Local dev

Depends on `@code-mw/anthropic-proxy-client` from GitHub Packages. `npm install` requires a `read:packages` token:

```sh
export NODE_AUTH_TOKEN=$(gh auth token)   # gh CLI must have read:packages scope
npm install
npm run dev
```

If the `gh` token is missing `read:packages`: `gh auth refresh -s read:packages`, or use a classic PAT.

## Key files

- `src/data/profile.ts` — all CV content, single source of truth
- `src/components/ChatWidget.astro` — floating chat widget (Anthropic proxy)
- `src/pages/index.astro` — main page; imports ChatWidget
- `.npmrc` — GitHub Packages registry config for `@code-mw` scope
- `.github/workflows/deploy.yml` — builds CV PDF, builds site, deploys to Pages; injects `NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}` for `npm ci`

## CV PDF

Generated at deploy time by the GHA workflow. To regenerate locally:

```sh
npm run dev        # Terminal 1
npm run cv:pdf     # Terminal 2 — outputs public/marcin-winogrodzki-cv.pdf
```

`public/marcin-winogrodzki-cv.pdf` is gitignored.

## Deploy

Push to `main` → deploy workflow runs automatically. GitHub Pages source must be set to **GitHub Actions** in repo Settings → Pages.
