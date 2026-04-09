import type { VercelResponse } from "@vercel/node";
import { fetchStrapiJson } from "./strapi.js";
import { setCacheHeaders } from "./cache.js";

type CacheConfig = {
  browserMaxAge?: number;
  cdnSMaxAge?: number;
  staleWhileRevalidate?: number;
  staleIfError?: number;
};

type ProxyOptions<TInput, TOutput = TInput> = {
  pathname: string;
  params?: URLSearchParams;
  transform?: (json: TInput) => TOutput;
  cache?: CacheConfig;
};

export async function proxyStrapi<TInput, TOutput = TInput>(
  res: VercelResponse,
  options: ProxyOptions<TInput, TOutput>
): Promise<TOutput> {
  const json = await fetchStrapiJson<TInput>(options.pathname, options.params);

  setCacheHeaders(res, options.cache);

  if (options.transform) {
    return options.transform(json);
  }

  return json as unknown as TOutput;
}