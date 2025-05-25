import { Cards } from '../../../components/card';

export interface IServiceAndProductsState {
  queryPayload: IServiceAndProductsStateQueryPayload;
  viewModel: IServiceAndProductsViewModel;
  loading: boolean;
  error: null | string;
}

export interface IServiceAndProductsStateQueryPayload {
  query: IServiceAndProductsStateQuery;
  skip: number;
  limit: number;
}

export interface IServiceAndProductsStateQuery {
  keyword: string;
  productCategoryId: string;
  tags?: string[];
}

export interface IServiceAndProductsViewModel {
  cardList: Cards;
  totalCount: number;
}

export interface IProductCardsViewModel extends Cards {}
