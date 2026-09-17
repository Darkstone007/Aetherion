/** Prefix site-root paths so GitHub Pages (`/Aetherion/`) and local `/` both work. */
export function withBase(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("data:") || path.startsWith("#")) {
    return path;
  }
  const base = import.meta.env.BASE_URL || "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (base === "/") return normalized;
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${b}${normalized}`;
}
