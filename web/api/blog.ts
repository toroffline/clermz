import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getStrapiConfig } from "./_lib/strapi.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { strapiUrl, headers } = getStrapiConfig();
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

    const response = await fetch(
      `${strapiUrl}/api/blogs?${params.toString()}`,
      {
        headers,
      },
    );

    console.log({ response });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({
        error: "Failed to fetch blog from Strapi",
        details: text,
      });
    }

    const json = await response.json();
    const firstItem = json?.data?.[0];

    if (!firstItem) {
      return res.status(404).json({
        error: "Blog not found",
        slug,
      });
    }

    return res.status(200).json(firstItem);
  } catch (error) {
    console.error("api/blog error:", error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
}
