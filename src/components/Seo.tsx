import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article" | "product";
  jsonLd?: object | object[];
  ogImage?: string;
  noindex?: boolean;
  keywords?: string;
  notFound?: boolean;
}

export const SITE_URL = "https://saveiy.com";
export const SITEWIDE_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/be1351f0-ab6f-4aa1-b871-31d69a95b659";

const truncate = (value: string, max: number) => {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trimEnd()}…`;
};

export const canonicalForPath = (path = "/") => {
  const cleanPath = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL}${cleanPath}`;
};

const Seo = ({
  title,
  description,
  canonical,
  type = "website",
  jsonLd,
  ogImage = SITEWIDE_OG_IMAGE,
  noindex = false,
  keywords,
  notFound = false,
}: SeoProps) => {
  const url = canonicalForPath(canonical?.replace(SITE_URL, "") || "/");
  const safeTitle = title;
  const safeDescription = truncate(description, 155);
  
  useEffect(() => {
    if (!notFound) return;
    document.querySelectorAll('link[rel="canonical"], meta[property="og:url"], meta[name="twitter:url"]').forEach((el) => el.remove());
    document.querySelectorAll('meta[name="robots"]').forEach((el) => el.setAttribute("content", "noindex"));
  });

  if (notFound) {
    return (
      <Helmet>
        <title>{safeTitle}</title>
        <meta name="description" content={safeDescription} />
        <meta name="robots" content="noindex" />
      </Helmet>
    );
  }

  return (
    <Helmet>
      <title>{safeTitle}</title>
      <meta name="description" content={safeDescription} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((data, index) => (
        <script type="application/ld+json" key={index}>{JSON.stringify(data)}</script>
      ))}
    </Helmet>
  );
};

export default Seo;
