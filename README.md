# Agency Website Template

A multilingual, single-page marketing site for a small web studio — built with plain HTML, CSS and vanilla JavaScript. No framework, no build step.

> All names, contact details and images are fictional placeholders. Replace them before using this for a real business.

## Features

- **4 languages** — English, Somali, Arabic (full RTL layout) and Norwegian, switched client-side via `i18n.js` and remembered in `localStorage`
- **Package & pricing section** with a responsive layout down to small phones
- **Interactive concept previews** — a product-dashboard demo and an e-commerce checkout demo (illustrations only, no real backend or payments)
- **WhatsApp enquiry form** — builds a pre-filled message in the browser; nothing is sent to a server
- **Local SVG flags** (avoids the Windows emoji-flag rendering issue)
- Accessible markup: semantic landmarks, labelled controls, `aria-live` regions, keyboard-friendly dialogs

## Project structure

```
index.html   page markup
styles.css   styles
app.js       interactions (form, demos, language bar)
i18n.js      translation strings (EN | SO | AR | NO)
assets/      SVG flags/mark and placeholder images
_headers     Cloudflare Pages security headers
```

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Static files only — works on Cloudflare Pages, Netlify, GitHub Pages, etc. Upload the folder contents as-is.

## Customise

1. Set your WhatsApp number in `app.js` (`WA_PHONE`) and in the links in `index.html`.
2. Replace the example email addresses in `index.html`.
3. Edit copy in `index.html` and the matching entries in `i18n.js` (English text is the lookup key).
4. Swap the placeholder images in `assets/`.

## License

MIT — see [LICENSE](LICENSE).
