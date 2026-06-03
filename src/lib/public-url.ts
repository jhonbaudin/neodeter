export const resolvePublicUrl = (path: string) => {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;

  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const normalizedBasePath = normalizedBase.replace(/^\/+|\/+$/g, "");
  const normalizedPath = path.replace(/^\/+/, "");
  const legacyBasePath = "neodeter";
  const legacyTechnicalSheetPath = "fichas-tecnicas/";

  const normalizePath = (value: string) => {
    const withoutLegacyBase = value.startsWith(`${legacyBasePath}/`)
      ? value.slice(legacyBasePath.length + 1)
      : value;

    if (withoutLegacyBase.startsWith(legacyTechnicalSheetPath)) {
      return `uploads/productos/${withoutLegacyBase}`;
    }

    return withoutLegacyBase;
  };

  if (!normalizedBasePath && normalizedPath.startsWith(`${legacyBasePath}/`)) {
    return `/${normalizePath(normalizedPath)}`;
  }

  if (
    normalizedBasePath &&
    (normalizedPath === normalizedBasePath ||
      normalizedPath.startsWith(`${normalizedBasePath}/`))
  ) {
    return `/${normalizedPath}`;
  }

  return `${normalizedBase}${normalizePath(normalizedPath)}`;
};
