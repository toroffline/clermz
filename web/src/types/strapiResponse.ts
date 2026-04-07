export type CollectionInformation<T> = {
  id: number;
  attributes: T;
};

export type Response<T> = {
  data: CollectionInformation<T>[];
  meta: any;
};