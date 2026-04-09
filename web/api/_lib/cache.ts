import type { VercelResponse } from "@vercel/node";

type CacheOptions = {
  browserMaxAge?: number;
  cdnSMaxAge?: number;
  staleWhileRevalidate?: number;
  staleIfError?: number;
};

export function setCacheHeaders(
  res: VercelResponse,
  {
    browserMaxAge = 0,
    cdnSMaxAge = 1800,
    staleWhileRevalidate = 86400,
    staleIfError = 86400,
  }: CacheOptions = {},
) {
  res.setHeader(
    "Cache-Control",
    `public, max-age=${browserMaxAge}, must-revalidate`,
  );

  res.setHeader(
    "CDN-Cache-Control",
    [
      "public",
      `s-maxage=${cdnSMaxAge}`,
      `stale-while-revalidate=${staleWhileRevalidate}`,
      `stale-if-error=${staleIfError}`,
    ].join(", "),
  );
}
