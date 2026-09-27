# Project Architecture Rules

- Route metadata must use `src/components/Seo.tsx`, so canonical, social, indexing, and JSON-LD output stay consistent.
- Public route lists must come from shared content data, so prerendering and sitemap generation cannot drift from the app.
- Production builds must prerender public pages and emit `dist/404.html`, so crawlers receive route-specific HTML before JavaScript.