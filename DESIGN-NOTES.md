# Forest Black & Lime portfolio

Implemented design option 3 in the existing React / Vite portfolio.

## Design and content

- Forest-black surfaces, lime accents, condensed typography, architectural hero, asymmetric project grid, portrait-led About section, experience timeline, and large contact section.
- The user-supplied photograph is visible in both the hero identity and the About section. The original file is preserved as `public/images/randolf-portrait.jpg`; `randolf-portrait.webp` is a resized, compressed copy with no generative alteration.
- All 16 technology entries have local SVG brand logos from Devicon v2.17.0, with attribution and license in `public/logos/`.
- Actual project screenshots, descriptions, media, demos, résumé, social links, and work history are preserved.
- The selected design is consistently dark. The previous light-theme preference does not override it.

## Motion and accessibility

- Staggered hero entrance, one-time scroll reveals, gentle project-image hover movement, portrait hover zoom, animated link arrows, scroll cue, and reading-progress line.
- `prefers-reduced-motion` removes animation and smooth scrolling. Changing the preference while the page is open immediately reveals pending content.
- Native project dialogs support Escape, keyboard focus containment/restoration, and background scroll locking.
- Sticky navigation, mobile menu with Escape/outside-pointer dismissal, visible keyboard focus, labeled controls, and an expandable credentials section.

## Artwork

The decorative architectural hero was created with the built-in image generation tool and compressed to `public/images/forest-architecture.webp`. It is separate from the user's real photograph.

Prompt:

Use case: stylized-concept. Asset type: wide photographic website hero background, 2.5:1 landscape. A beautiful minimalist brutalist architectural interior in extremely dark forest green and near-black concrete. On the RIGHT HALF, a broad ascending black concrete staircase leads diagonally upward to one tall rectangular doorway lit by soft vivid yellow-green lime light (#d5f86b). Quiet light spill on concrete step edges, tactile subtle concrete grain, atmospheric depth, high-end architectural photography. Left 55 percent is almost-black green low-detail negative space for large website text, avoid any objects in this left area. Strong angular geometry. The stairs and doorway remain visible and well composed in the right half. No people, no words, no typography, no logos, no UI, no Batman, no city skyline, no watermark. Sophisticated restrained cinematic scene for a developer portfolio, premium natural materials, not a sci-fi illustration.

## Verification

Browser checks passed at widths 320, 360, 375, 390, 560, 768, 800, 801, 1024, 1440, and 1920 pixels, plus 844×390 landscape. Checks include all project dialogs, local resource links, photo loading, all 16 SVG logos, navigation, keyboard focus, credentials disclosure, horizontal overflow, scroll reveals, live reduced-motion changes, and runtime errors. Desktop, tablet, and mobile screenshots were visually reviewed. The production build is verified before publication.
