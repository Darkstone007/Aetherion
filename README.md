# Echoes of Aetherion

Visual identity site for **Aetherion / Eden** — Circuit Ink: Arcane’s 2D/3D hybrid method mixed with Cyberpunk: Edgerunners night anime. Not a playable game.

**Live site:** [https://darkstone007.github.io/Aetherion/](https://darkstone007.github.io/Aetherion/)

## What is here

Identity, story-mode chronicle, 30 people, 18 gods, 25 species, 50 creatures, 7 inhabited continents (each with city plates from other angles), materials / runes / artifacts, systems, and continuity threads.

## Publish

The public GitHub Pages URL is already on. Two paths keep it there:

1. **Branch `main`, folder `/`** — `index.html`, `404.html`, `.nojekyll`, `assets/`, and `art/` at the repo root are the built site. Push those when the look changes.
2. **GitHub Actions** — `.github/workflows/pages.yml` builds `npm run build:pages`. In the repo: **Settings → Pages → Source: GitHub Actions** if you want that path to own the URL.

```bash
npm ci          # or npm install
npm run dev     # local
npm run build:pages
```
