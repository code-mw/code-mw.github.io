# code-mw.github.io

Personal site / CV. Built with [Astro](https://astro.build) and Tailwind CSS v4. Deployed to GitHub Pages via GitHub Actions.

## Local dev

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # output to ./dist
npm run preview   # preview ./dist locally
```

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

## Deployment

Pushes to `main` trigger the [deploy workflow](.github/workflows/deploy.yml) automatically. The workflow generates the CV PDF, builds the site, then deploys to GitHub Pages.

GitHub Pages source must be set to **GitHub Actions** in repo Settings → Pages.
