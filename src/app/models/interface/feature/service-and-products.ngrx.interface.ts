export interface IServiceAndProductsState {
  query: IServiceAndProductsStateQuery;
}

export interface IServiceAndProductsStateQuery {
  limit: number;
  page: number;
  keyword: string;
}
