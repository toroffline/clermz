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

export function buildStrapiUrl(
  pathname: string,
  params?: URLSearchParams,
): string {
  const { strapiUrl } = getStrapiConfig();
  const query = params?.toString();

  if (!query) {
    return `${strapiUrl}${pathname}`;
  }

  return `${strapiUrl}${pathname}?${query}`;
}

export async function fetchStrapiJson<T>(
  pathname: string,
  params?: URLSearchParams,
): Promise<T> {
  const { headers } = getStrapiConfig();
  const url = buildStrapiUrl(pathname, params);

  const response = await fetch(url, { headers });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Strapi request failed: ${response.status} ${text}`);
  }

  return response.json() as Promise<T>;
}

export function handleError(pathname: string, error: unknown, res: any) {
  console.error(`[${pathname}]error:`, error);
  return res.status(500).json({
    error: error instanceof Error ? error.message : "Internal server error",
  });
}
