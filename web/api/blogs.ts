import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getStrapiConfig } from "./_lib/strapi.js";

export default async function handler(
  _req: VercelRequest,
  res: VercelResponse,
) {
  try {
    const { strapiUrl, headers } = getStrapiConfig();

    const params = new URLSearchParams();
    params.append("fields[0]", "slug");
    params.append("fields[1]", "createdAt");
    params.append("fields[2]", "title");
    params.append("fields[3]", "description");
    params.append("populate[category][fields][0]", "name");

    const response = await fetch(
      `${strapiUrl}/api/blogs?${params.toString()}`,
      {
        headers,
      },
    );

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({
        error: "Failed to fetch blogs from Strapi",
        details: text,
      });
    }

    const json = await response.json();
    return res.status(200).json(json);
  } catch (error) {
    console.error("api/blogs error:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
