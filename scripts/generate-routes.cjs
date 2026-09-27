const fs = require("fs");
const path = require("path");

// Mocking the imports since we are running in Node
const postsFile = fs.readFileSync(path.join(__dirname, "../src/data/posts.ts"), "utf8");
const slugRegex = /slug:\s*"([^"]+)"/g;
const blogSlugs = [];
let match;
while ((match = slugRegex.exec(postsFile)) !== null) {
  blogSlugs.push(match[1]);
}

const staticRoutes = [
  "/",
  "/product",
  "/how-it-works",
  "/about",
  "/privacy",
  "/terms",
  "/blog",
  "/delete"
];

const alternativeSlugs = ["netflix", "adobe-photoshop"]; // Hardcoded from AlternativesPage.tsx for now

const allRoutes = [
  ...staticRoutes,
  ...blogSlugs.map(s => `/blog/${s}`),
  ...alternativeSlugs.map(s => `/alternatives/${s}`)
];

console.log(allRoutes.join("\n"));
