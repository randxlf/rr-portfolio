# Forge & Fade portfolio revision

## What changed

- Replaced N03 Registration System Module with Forge & Fade Supply, Phase 10.
- Added a branded project preview, a dedicated HTML project-description page, and the public production demo URL https://forge-and-fade.vercel.app/.
- Kept photos in full color with pointer-driven perspective, image zoom, scroll reveals, and reduced-motion support.
- Updated skills to reflect the featured projects.
- Refined desktop/mobile typography, spacing, navigation, and focus indicators with cool neutrals, blue accents, and geometric type.
- Preserved the other projects, resume, social links, and original supplied assets.

The description is at `public/projects/forge-and-fade/project-description.html`. The preview uses original brand artwork rather than a screenshot. The demo uses fictional brands and simulated checkout; it does not process real payments.

The original registration project files remain as unlinked archival assets. Your original uploaded ZIP and desktop project were not overwritten.

## Preview locally

```sh
npm ci
npm run dev
```

## Deploy to Vercel

Use the **Vite** framework preset, build command `npm run build`, and output directory `dist`. This portfolio is static and does **not** need the Forge & Fade database credentials. The storefront opens through its live-demo link.

Copy these revised source files and public assets into your existing portfolio repository, preserving its `.git` directory. Commit and push using your usual workflow. Do not copy `node_modules`, `.npm-cache`, or `dist` into Git.
