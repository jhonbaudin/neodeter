import { useEffect } from "react";
import logo from "@/assets/brand/logo.webp";
import { content } from "@/content/content";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const managedAttribute = "data-seo-managed";
const jsonLdAttribute = "data-seo-jsonld";

const ensureMeta = (selector: string, attributes: Record<string, string>) => {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);
  const element = existing ?? document.createElement("meta");

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  element.setAttribute(managedAttribute, "true");

  if (!existing) {
    document.head.appendChild(element);
  }
};

const ensureLink = (selector: string, attributes: Record<string, string>) => {
  const existing = document.head.querySelector<HTMLLinkElement>(selector);
  const element = existing ?? document.createElement("link");

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  element.setAttribute(managedAttribute, "true");

  if (!existing) {
    document.head.appendChild(element);
  }
};

const getAbsoluteUrl = (value: string) =>
  value.startsWith("http") ? value : new URL(value, content.seo.siteUrl).toString();

const Seo = ({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
  noIndex = false,
  jsonLd,
}: SeoProps) => {
  useEffect(() => {
    const resolvedTitle = title
      ? content.seo.titleTemplate.replace("%s", title)
      : content.seo.defaultTitle;
    const resolvedDescription = description ?? content.seo.defaultDescription;
    const resolvedPath = path ?? window.location.pathname;
    const canonicalUrl = getAbsoluteUrl(resolvedPath);
    const socialImage = getAbsoluteUrl(image ?? logo);
    const robots = noIndex ? "noindex, nofollow" : "index, follow";
    const keywordValue = [...content.seo.keywords, ...(keywords ?? [])].join(", ");

    document.title = resolvedTitle;

    ensureMeta('meta[name="description"]', { name: "description", content: resolvedDescription });
    ensureMeta('meta[name="keywords"]', { name: "keywords", content: keywordValue });
    ensureMeta('meta[name="author"]', { name: "author", content: content.company.legalName });
    ensureMeta('meta[name="robots"]', { name: "robots", content: robots });
    ensureMeta('meta[name="theme-color"]', { name: "theme-color", content: content.colors.primary });
    ensureMeta('meta[property="og:type"]', { property: "og:type", content: type });
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: resolvedTitle });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: resolvedDescription,
    });
    ensureMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    ensureMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: content.seo.siteName,
    });
    ensureMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: content.seo.locale,
    });
    ensureMeta('meta[property="og:image"]', { property: "og:image", content: socialImage });
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: resolvedTitle });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: resolvedDescription,
    });
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: socialImage });
    ensureLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });

    document.head.querySelectorAll(`script[${jsonLdAttribute}="true"]`).forEach((node) => node.remove());

    const entries = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    entries.forEach((entry) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute(jsonLdAttribute, "true");
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
    });
  }, [description, image, jsonLd, keywords, noIndex, path, title, type]);

  return null;
};

export default Seo;
