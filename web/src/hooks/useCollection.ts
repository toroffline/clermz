import { Response } from "../types/strapiResponse";
import { useStrapi } from "./useStrapi";
import { BlogsResponse } from "../types/blog";

export function useCollection() {
  const client = useStrapi();

  const get = async <T>(path: string): Promise<Response<T>> => {
    const response = await client.get<Response<T>>(`/${path}`);
    return response.data;
  };

  const getBlogs = async (): Promise<BlogsResponse> => {
    const response = await client.get<BlogsResponse>("/blogs");
    return response.data;
  };

  return { get, getBlogs };
}
