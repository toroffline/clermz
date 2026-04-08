import { CollectionInformation } from "./strapiResponse";

export type BlogAttributes = {
  title: string;
  description: string;
  slug: string;
  createdAt: Date;
  category: {
    data: CollectionInformation<BlogCategoryAttributes>;
  };
};

export type BlogCategoryAttributes = {
  name: string;
};

type BlogPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type BlogsResponse = {
  data: CollectionInformation<BlogAttributes>[];
  meta: BlogPagination;
};
