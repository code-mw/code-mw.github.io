# marwin.github.io

Personal site / business card. Built with [Astro](https://astro.build) and Tailwind CSS v4. Deployed to GitHub Pages via GitHub Actions.

## Local dev

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # output to ./dist
npm run preview   # preview ./dist locally
```

Requires Node >= 24.

## Deployment

Pushes to `main` trigger the [deploy workflow](.github/workflows/deploy.yml) automatically.

GitHub Pages source must be set to **GitHub Actions** in repo Settings → Pages.
