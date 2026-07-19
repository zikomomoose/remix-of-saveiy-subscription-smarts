// Lightweight wrapper around gtag for typed event tracking.
type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: GtagParams) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (name: string, params: GtagParams = {}) => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  } catch {
    // no-op
  }
};

export const trackWaitlistSubmit = (location: string) =>
  trackEvent("waitlist_submit", { location });

export const trackButtonClick = (label: string, location: string) =>
  trackEvent("button_click", { label, location });

export const trackBlogRead = (slug: string, title: string) =>
  trackEvent("blog_read", { slug, title });
