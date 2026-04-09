import type { VercelRequest, VercelResponse } from "@vercel/node";
import { proxyStrapi } from "./_lib/proxy.js";
import { handleError } from "./_lib/strapi.js";

export default async function handler(
  _req: VercelRequest,
  res: VercelResponse,
) {
  const pathname = "/api/blogs";
  try {
    const params = new URLSearchParams();
    params.append("fields[0]", "slug");
    params.append("fields[1]", "createdAt");
    params.append("fields[2]", "title");
    params.append("fields[3]", "description");
    params.append("populate[category][fields][0]", "name");

    const json = await proxyStrapi(res, {
      pathname,
      params,
      cache: {
        cdnSMaxAge: 1800,
        staleWhileRevalidate: 86400,
        staleIfError: 86400,
      },
    });

    return res.status(200).json(json);
  } catch (error) {
    handleError(pathname, error, res);
  }
}
