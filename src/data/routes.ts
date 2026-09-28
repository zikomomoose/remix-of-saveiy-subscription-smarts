import { posts } from "./posts";
import { alternativeSlugs } from "../pages/AlternativesPage";

export type PublicRoute = {
  path: string;
  lastmod: string;
  indexable: boolean;
};

const staticRoutes: PublicRoute[] = [
  { path: "/", lastmod: "2026-09-27", indexable: true },
  { path: "/product", lastmod: "2026-09-27", indexable: true },
  { path: "/how-it-works", lastmod: "2026-09-27", indexable: true },
  { path: "/about", lastmod: "2026-09-27", indexable: true },
  { path: "/privacy", lastmod: "2026-03-15", indexable: true },
  { path: "/terms", lastmod: "2026-03-15", indexable: true },
  { path: "/blog", lastmod: "2026-09-27", indexable: true },
  { path: "/delete", lastmod: "2026-09-27", indexable: false },
];

const toIsoDate = (date: string) => new Date(`${date} 00:00:00 UTC`).toISOString().slice(0, 10);

export const publicRoutes: PublicRoute[] = [
  ...staticRoutes,
  ...posts.map((post) => ({
    path: `/blog/${post.slug}`,
    lastmod: toIsoDate(post.lastUpdated || post.date),
    indexable: !post.noindex,
  })),
  ...alternativeSlugs.map((slug) => ({
    path: `/alternatives/${slug}`,
    lastmod: "2026-09-27",
    indexable: true,
  })),
];