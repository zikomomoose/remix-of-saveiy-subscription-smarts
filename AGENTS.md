# Project Architecture Rules

- Route metadata must use `src/components/Seo.tsx`, so canonical, social, indexing, and JSON-LD output stay consistent.
- Public route lists must come from shared content data, so prerendering and sitemap generation cannot drift from the app.
- Production builds must prerender public pages and emit `dist/404.html`, so crawlers receive route-specific HTML before JavaScript.
- App download actions use shared Play Store and iOS waitlist controls, so QR behavior and signup handling stay consistent sitewide.