# Echoes of Aetherion

Visual identity site for **Aetherion / Eden** — Circuit Ink: Arcane’s 2D/3D hybrid method mixed with Cyberpunk: Edgerunners night anime. Not a playable game.

Live on GitHub Pages: [https://darkstone007.github.io/Aetherion/](https://darkstone007.github.io/Aetherion/)

## What is here

Identity, story-mode chronicle, 30 people, 18 gods, 25 species, 50 creatures, 7 inhabited continents (each with city plates from other angles), materials / runes / artifacts, systems, and continuity threads.

## Publish

This repo deploys itself.

1. **GitHub Pages** — pushing `main` runs `.github/workflows/pages.yml`. The public URL is `https://darkstone007.github.io/Aetherion/`.
2. First time only: repo **Settings → Pages → Source: GitHub Actions** (the workflow also enables this after the first run).
3. **Vercel** still works from `npm run build` (Nitro `vercel` preset). Do not change the default build.

```bash
npm ci
npm run dev          # local
npm run build:pages  # static output in .output/public
```
