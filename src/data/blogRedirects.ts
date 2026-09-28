// Redirect map for legacy or renamed blog slugs.
// Add entries as: "old-slug": "new-slug"
// Used by <BlogPost /> — an old slug 302s to the new canonical URL.
export const blogSlugRedirects: Record<string, string> = {
  // examples — replace with real renames when needed
  "subscription-manager-app": "subscription-manager-app-in-india",
  "upi-autopay-mandates-india-guide": "find-active-upi-autopay-mandates",
};
