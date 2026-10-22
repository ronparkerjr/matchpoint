/** Resolve a public/ asset beneath the Vite deployment base, including Pages subpaths. */
export function publicAsset(path: string, base = import.meta.env.BASE_URL): string {
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
