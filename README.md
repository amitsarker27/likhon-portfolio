# Likhon Sarker — Portfolio (Static HTML)

Plain HTML / CSS / JS version of the portfolio, ready for **GitHub Pages**.

## Files
- `index.html` — page markup
- `styles.css` — all styles (blue/teal theme, responsive)
- `script.js` — typewriter animations + mobile menu

No build step. No dependencies (FontAwesome + Google Fonts load from CDN).

## Publish on GitHub Pages
1. Create a new GitHub repository (e.g. `likhon-portfolio`).
2. Upload these three files to the repo root.
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch** → branch `main` → folder `/ (root)` → **Save**.
5. Wait ~1 minute. Your site is live at:
   `https://<your-username>.github.io/likhon-portfolio/`

## Customize
- Email / phone: edit the `#contact` section in `index.html`.
- Profile photo: replace the `<i class="fa-solid fa-user-tie">` block inside `.portrait-inner` with `<img src="your-photo.jpg" alt="Likhon Sarker">`.
- Colors: edit the `:root` variables at the top of `styles.css`.
- Typed roles in hero: edit the `roles` array in `script.js`.
