# Randolf Rivera — Portfolio

A responsive React / Vite portfolio using the Forest Black & Lime design, real portrait photography, and subtle accessible motion.

## Run locally

Use Node.js 18 or newer. From this folder:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Build and preview

```sh
npm run build
npm run preview
```

Deploy the contents of `dist/` using the Vite preset, build command `npm run build`, and output directory `dist`. No environment variables or database are needed. Do not open `index.html` directly from the filesystem; run the local server.

## Edit the portfolio

- `src/App.jsx`: layout, cards, contact details, navigation, and page motion.
- `src/ProjectDialog.jsx`: accessible project detail dialogs.
- `src/content.js`: original project descriptions, resources, skills, résumé path, and work history.
- `src/refinement.css`: colors, spacing, responsive layout, and motion preferences.
- `src/fonts.css` and `public/fonts/`: self-hosted Barlow fonts and license.
- `public/images/`: architectural artwork, original user photograph, and optimized portrait.
- `public/logos/`: local technology SVG logos, attribution, and license.
- `public/projects/`: original project screenshots, PDFs, video, and other resources.
- `public/Randolf-Rivera-Resume.pdf`: existing résumé.

Project cards open full details and original resource links. Contact buttons open email. The site uses a consistent dark theme. Animations honor the operating system reduced-motion preference.

See `DESIGN-NOTES.md` for changes, artwork prompts, and verification details. The original uploaded archive was not modified. Deployment is handled by the hosting service connected to this repository.
