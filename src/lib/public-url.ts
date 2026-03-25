export const resolvePublicUrl = (path: string) => {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;

  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const normalizedPath = path.replace(/^\/+/, "");

  return `${normalizedBase}${normalizedPath}`;
};
