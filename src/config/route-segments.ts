/**
 * Root segments under `src/app/` that are NOT prototypes.
 * Anything else with a `page.tsx` is treated as a prototype.
 */
export const RESERVED_ROOT_SEGMENTS = new Set<string>([
  "api",
  "design-system",
]);

/**
 * Returns true if a top-level segment should be excluded from the
 * prototype index (reserved app routes, hidden folders, or underscore
 * scaffolding folders like `_example`).
 */
export function isExcludedPrototypeRootSegment(segment: string): boolean {
  if (!segment) return true;
  if (segment.startsWith(".")) return true;
  if (segment.startsWith("_")) return true;
  // Next.js route groups: src/app/(shell), src/app/(marketing), etc.
  if (segment.startsWith("(")) return true;
  if (RESERVED_ROOT_SEGMENTS.has(segment)) return true;
  return false;
}

/**
 * Slug rules for new prototype folders.
 * Lowercase alphanumeric with single hyphens between words; 1-60 chars.
 */
export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const SLUG_MAX_LENGTH = 60;

export function isReservedSlug(slug: string): boolean {
  return isExcludedPrototypeRootSegment(slug);
}
