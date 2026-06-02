export const resolvePublicUrl = (path: string) => {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;

  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const normalizedBasePath = normalizedBase.replace(/^\/+|\/+$/g, "");
  const normalizedPath = path.replace(/^\/+/, "");
  const legacyBasePath = "neodeter";

  if (!normalizedBasePath && normalizedPath.startsWith(`${legacyBasePath}/`)) {
    return `/${normalizedPath.slice(legacyBasePath.length + 1)}`;
  }

  if (
    normalizedBasePath &&
    (normalizedPath === normalizedBasePath ||
      normalizedPath.startsWith(`${normalizedBasePath}/`))
  ) {
    return `/${normalizedPath}`;
  }

  return `${normalizedBase}${normalizedPath}`;
};
