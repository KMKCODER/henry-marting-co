# Henry Martin Legal Practitioners

Website for **Henry Martin & Company Legal Practitioners** — a commercial law firm based in Lusaka, Zambia.

## Brand Colors

- Primary Red: `#B22425`
- Black: `#000000`

## Running Locally

Open `index.html` in a browser, or serve the directory with any static file server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to Render

This site is configured as a [Render static site](https://render.com/docs/static-sites) via `render.yaml`.

1. Push this repo to GitHub.
2. In the [Render Dashboard](https://dashboard.render.com/), choose **New** → **Blueprint**.
3. Connect your GitHub repo — Render will read `render.yaml` and create the static site.
4. After deploy, your site will be live at `https://henry-martin-legal.onrender.com` (or a custom domain you configure).

No build step is required — Render publishes the repo root directly.

## Structure

- `index.html` — Main single-page website
- `styles.css` — Stylesheet with brand styling
- `main.js` — Navigation and form interactions
- `logo/hmlogo.png` — Company logo

## Sections

- Hero with firm tagline
- About, Vision, Mission & Core Values
- 11 Practice Areas
- Partner Profiles
- Industries Served
- Why Choose Us
- Contact Form & Details
