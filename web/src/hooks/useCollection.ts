import { Response } from "../types/strapiResponse";
import { useStrapi } from "./useStrapi";
import { BlogsResponse } from "../types/blog";

export function useCollection() {
  const client = useStrapi();

  const get = async <T>(collectionPluralName: string): Promise<Response<T>> => {
    const response = await client.get(`/api/${collectionPluralName}`);

    return response.data;
  };

  const getBlogs = async (): Promise<BlogsResponse> => {
    const response = await client.get<BlogsResponse>(`/api/blogs?
      fields[0]=slug
      &fields[1]=createdAt
      &fields[2]=title
      &fields[3]=description
      &populate[category][fields][0]=name
    `);

    return response.data;
  };

  return { get, getBlogs };
}
