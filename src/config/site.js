// Single source of truth for the canonical site URL.
// Override per environment with NEXT_PUBLIC_SITE_URL (no trailing slash).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.elephantgroup.cl"
).replace(/\/$/, "");

export const SITE_NAME = "Elephant Group";
