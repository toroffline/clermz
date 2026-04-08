import { BlogContentAttributes, BlogContentResponse, BlogsResponse } from "../types/blog";
import { CollectionInformation } from "../types/strapiResponse";
import { useStrapi } from "./useStrapi";

export function useBlogCollection() {
  const client = useStrapi();

  const getBlogs = async (): Promise<BlogsResponse> => {
    const response = await client.get<BlogsResponse>("/blogs");
    return response.data;
  };

  const getBlogContentBySlug = async (slug: string): Promise<CollectionInformation<BlogContentAttributes>> => {
    const response = await client.get<CollectionInformation<BlogContentAttributes>>(`/blog?slug=${slug}`);
    return response.data;
  };

  return { getBlogs, getBlogContentBySlug };
}
