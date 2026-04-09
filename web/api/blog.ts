import type { VercelRequest, VercelResponse } from "@vercel/node";
import { proxyStrapi } from "./_lib/proxy.js";
import { handleError } from "./_lib/strapi.js";
import { NotFoundError } from "./_lib/errors.js";

export type BlogContentResponse = {
  data: any[];
  meta: any;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const pathname = "/api/blogs";
  try {
    const slug = req.query.slug;

    if (!slug || typeof slug !== "string") {
      return res.status(400).json({
        error: "Missing or invalid slug",
      });
    }

    const params = new URLSearchParams();
    params.append("filters[slug][$eq]", slug);
    params.append("fields[0]", "slug");
    params.append("fields[1]", "createdAt");
    params.append("fields[2]", "title");
    params.append("fields[3]", "description");
    params.append("fields[4]", "content");
    params.append("populate[category][fields][0]", "name");
    const json = await proxyStrapi<BlogContentResponse>(res, {
      pathname,
      params,
      cache: {
        cdnSMaxAge: 1800,
        staleWhileRevalidate: 86400,
        staleIfError: 86400,
      },
    });

    const firstItem = json?.data?.[0];

    if (!firstItem) {
      throw new NotFoundError("Blog not found");
    }

    return res.status(200).json(firstItem);
  } catch (error) {
    handleError(pathname, error, res);
  }
}
