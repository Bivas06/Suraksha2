# SURAKSHA Particle Background

A standalone, full-screen extraction of the supplied particle renderer. It starts with the **Astra** particle path and omits the original page's heading, path controls, cursor overlay, and footer UI.

## Preview locally

1. Keep `index.html`, `particle-background.css`, and `particle-background.js` in the same folder.
2. Open `index.html` in a modern browser. If the browser blocks WebGL or local-file behavior, run a local server from this folder (for example `python -m http.server 8000`) and open `http://localhost:8000`.
3. Drag on the particle field to rotate it. Use the arrow keys when the canvas is focused.

## Use in SURAKSHA

- Copy `particle-background.js` and `particle-background.css` into your project.
- Add `<canvas id="field"></canvas>` inside a full-screen, positioned container.
- Add the CSS and load the JS after the canvas exists in the DOM.
- Keep the canvas behind your page content with `position: absolute; inset: 0; z-index: 0;` on the canvas and `position: relative; z-index: 1;` on your content.
- Ensure the canvas container has a real height (for example `min-height: 100vh`).

The original bundled renderer includes its own Three.js implementation and shader code, so this package does not need a separate Three.js dependency or build step. It requires WebGL 2.
