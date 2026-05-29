import siteMediaContent from "./site-media.json";
import { resolvePublicUrl } from "@/lib/public-url";

export const siteMedia = siteMediaContent;

export const resolveEditableMedia = (
  path: string | null | undefined,
  fallback: string,
) => {
  const trimmedPath = typeof path === "string" ? path.trim() : "";

  return trimmedPath ? resolvePublicUrl(trimmedPath) : fallback;
};
