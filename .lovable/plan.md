# Saveiy SEO and Static Prerender Plan

## Goal
Make every public Saveiy page fully readable in built HTML with unique metadata, canonical URLs, structured data, and correct indexing rules, while preserving the current design and all unlisted visible copy.

## Implementation

1. **Centralize page metadata**
   - Add a reusable `Seo` component powered by the existing `react-helmet-async` dependency.
   - Support `title`, `description`, `canonical`, `ogImage`, `noindex`, and one or more `jsonLd` objects.
   - Normalize canonicals to `https://saveiy.com` plus the route path, with `/` as the only root slash and no trailing slash elsewhere; set `og:url` from the same canonical.
   - Emit matching Open Graph and Twitter metadata, and omit image tags when no approved absolute image URL is available.
   - Remove the hard-coded title, description, canonical, and `og:url` from `index.html`, while retaining sitewide scripts and non-route-specific tags.

2. **Give every content route unique SEO data**
   - Replace page-level Helmet blocks with `Seo` on Home, Product, How It Works, About, Blog, Privacy, Terms, Delete Account, Blog Post, Alternatives, and Not Found.
   - Use the required homepage title: `Subscription Manager App India – Track UPI AutoPay | Saveiy`.
   - Keep every metadata title at 60 characters or fewer and description at 155 characters or fewer.
   - Blog posts use their post title and excerpt as the source metadata; alternatives use their own generated page title and description.
   - Preserve the existing on-page wording and visual styling.

3. **Add the requested structured data**
   - Homepage: `Organization`, `MobileApplication`, and `FAQPage` generated from the current homepage FAQ data.
   - Organization data will include Saveiy, Corewave Innovations Pvt. Ltd., `support@saveiy.com`, the logo, and the existing official Instagram and LinkedIn URLs.
   - Mobile app data will use `FinanceApplication`, `ANDROID`, free INR offer, and the live Google Play URL.
   - Blog posts: `Article` with publish/modified dates, author, Saveiy publisher, and canonical page ID; plus `BreadcrumbList`.
   - Preserve existing valid page-specific schemas where they do not conflict.

4. **Prerender every indexable route at build time**
   - Add a Vite-compatible static prerender pipeline using React server rendering and `StaticRouter`, avoiding a framework migration and preserving the current runtime router and UI.
   - Extract shared route rendering so browser navigation and prerendering use the same route definitions.
   - Generate the prerender route list from the `posts` data and exported alternatives slugs, plus all public static pages.
   - Bake full rendered body text, title, description, canonical, Open Graph tags, and JSON-LD into each route’s `dist/.../index.html` before JavaScript runs.
   - Keep analytics and browser-only effects client-side and verify hydration has no mismatch warnings.

5. **Correct dates and index controls**
   - Stagger the 29 future-dated blog posts across dates ending no later than 27 September 2026, preserving chronological ordering.
   - Add an explicit modified date to the post model and show `Last updated` visibly on every article.
   - Add `noindex` to `/delete` and all unknown URLs.
   - Change `/privacy-policy` to redirect to `/privacy` and exclude the alias from indexable output.
   - Update Not Found to retain its current simple presentation while adding links to both Home and Blog.

6. **Normalize document structure without visual changes**
   - Move the About team section inside its existing `<main>`.
   - Wrap Privacy, Terms, Delete Account, and Not Found page content in `<main>`.
   - Verify every rendered page has exactly one H1 and all primary content sits inside `<main>`.

7. **Regenerate crawl files from shared route data**
   - Replace the hand-maintained sitemap with a build-time generator sourced from the same static, blog, and alternatives route lists.
   - Include only canonical, indexable URLs; exclude `/privacy-policy`, `/delete`, unknown routes, and redirect-only slugs.
   - Emit page-specific `<lastmod>` values from each route’s content/update date rather than build time.
   - Update `robots.txt` to allow crawling, reference `https://saveiy.com/sitemap.xml`, and explicitly disallow `/delete`.

## Verification

- Run the production build and confirm every generated route file exists.
- Inspect raw built HTML with JavaScript absent for `/`, `/about`, and `/blog/how-to-cancel-upi-autopay`.
- Report the exact built `<title>` and canonical from those three files.
- Check title/description lengths, one-H1/one-main rules, future dates, canonical normalization, noindex routes, sitemap membership, and structured-data output.
- Run the existing SEO audit/tests and verify the preview build remains clean and visually unchanged.
