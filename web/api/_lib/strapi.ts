export function getStrapiConfig() {
  const strapiUrl = process.env.STRAPI_URL;
  const strapiApiToken = process.env.STRAPI_API_TOKEN;

  if (!strapiUrl || !strapiApiToken) {
    throw new Error("Missing STRAPI_URL or STRAPI_API_TOKEN");
  }

  return {
    strapiUrl,
    headers: {
      Authorization: `Bearer ${strapiApiToken}`,
      "Content-Type": "application/json",
    } as HeadersInit,
  };
}
