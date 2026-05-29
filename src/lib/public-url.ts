export const resolvePublicUrl = (path: string) => {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;

  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const normalizedBasePath = normalizedBase.replace(/^\/+|\/+$/g, "");
  const normalizedPath = path.replace(/^\/+/, "");

  if (
    normalizedBasePath &&
    (normalizedPath === normalizedBasePath ||
      normalizedPath.startsWith(`${normalizedBasePath}/`))
  ) {
    return `/${normalizedPath}`;
  }

  return `${normalizedBase}${normalizedPath}`;
};
