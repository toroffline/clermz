import { Response } from "../types/strapiResponse";
import { useStrapi } from "./useStrapi";
import { ArticleResponse } from "../types/article";

export function useCollection() {
  const client = useStrapi();

  const get = async <T>(collectionPluralName: string): Promise<Response<T>> => {
    const response = await client.get(`/api/${collectionPluralName}`);

    return response.data;
  };

  const getArticles = async (): Promise<ArticleResponse> => {
    const response = await client.get<ArticleResponse>(`/api/articles?populate[category][fields][0]=name`);
    return response.data;
  };

  return { get, getArticles };
}
