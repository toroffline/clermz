import { Response } from "../types/strapiResponse";
import { useStrapi } from "./useStrapi";

export function useCollection() {
  const client = useStrapi();

  const get = async <T>(path: string): Promise<Response<T>> => {
    const response = await client.get<Response<T>>(`/${path}`);
    return response.data;
  };

  return { get };
}
