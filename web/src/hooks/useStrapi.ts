import axios from "axios";
import { useMemo } from "preact/hooks";

export function useStrapi() {
  return useMemo(() => createClient(), []);
}

function createClient() {
  const apiToken = import.meta.env.VITE_STRAPI_API_TOKEN;
  const url = import.meta.env.VITE_STRAPI_URL;

  if (!apiToken) {
    throw new Error("API token not found. Please set in .env");
  }

  const instance = axios.create({
    baseURL: url,
  });
  instance.defaults.headers.common["Authorization"] = 'Bearer ' + apiToken;

  return instance;
}
