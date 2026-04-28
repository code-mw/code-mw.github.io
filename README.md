# code-mw.github.io

Personal site / CV. Built with [Astro](https://astro.build) and Tailwind CSS v4. Deployed to GitHub Pages via GitHub Actions.

## Local dev

This project depends on `@code-mw/anthropic-proxy-client` from GitHub Packages. `npm install` requires a GitHub token with `read:packages` scope set as `NODE_AUTH_TOKEN`:

```sh
export NODE_AUTH_TOKEN=$(gh auth token)   # gh CLI must have read:packages scope
npm install
npm run dev       # http://localhost:4321
npm run build     # output to ./dist
npm run preview   # preview ./dist locally
npm run format    # format with Prettier
```

If `gh` doesn't have `read:packages`, run `gh auth refresh -s read:packages` first, or use a classic PAT (GitHub → Settings → Developer settings → Personal access tokens → `read:packages`).

Requires Node >= 24.

## CV PDF

The CV is available at `/cv` and as a downloadable PDF. To regenerate the PDF locally:

```sh
# Terminal 1 — dev server must be running
npm run dev

# Terminal 2
npm run cv:pdf    # → public/marcin-winogrodzki-cv.pdf
```

`public/marcin-winogrodzki-cv.pdf` is gitignored. The deploy workflow generates it automatically before each build.

All CV content is sourced from `src/data/profile.ts` — update that file only.

## AI chat

The `/chat` page connects to a Cloudflare Worker proxy (`@code-mw/anthropic-proxy-client`). The worker URL is injected at build time via `PUBLIC_WORKER_URL`.

For local dev the chat page will silently fail without it. To test locally:

```sh
PUBLIC_WORKER_URL=https://your-worker.workers.dev npm run dev
```

For production, set `WORKER_URL` as a repository variable in GitHub → Settings → Variables → Actions. The deploy workflow reads it as `vars.WORKER_URL`.

## Deployment

Pushes to `main` trigger the [deploy workflow](.github/workflows/deploy.yml) automatically. The workflow generates the CV PDF, builds the site, then deploys to GitHub Pages.

GitHub Pages source must be set to **GitHub Actions** in repo Settings → Pages.
