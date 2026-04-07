import { CollectionInformation } from "./strapiResponse";

export type ArticleAttributes = {
  title: string;
  description: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  category: {
    data: CollectionInformation<ArticleCategoryAttributes>;
  };
};

export type ArticleCategoryAttributes = {
  name: string;
};

type ArticlePagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type ArticleResponse = {
  data: CollectionInformation<ArticleAttributes>[];
  meta: ArticlePagination;
};
