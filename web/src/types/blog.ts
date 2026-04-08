import { CollectionInformation } from "./strapiResponse";

export type BlogsAttributes = {
  title: string;
  description: string;
  slug: string;
  createdAt: Date;
  category: {
    data: CollectionInformation<BlogCategoryAttributes>;
  };
};

export type BlogContentAttributes = {
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
  data: CollectionInformation<BlogsAttributes>[];
  meta: BlogPagination;
};

export type BlogContentResponse = {
  data: CollectionInformation<BlogContentAttributes>;
  meta: BlogPagination;
};
