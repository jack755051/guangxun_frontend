import { Cards } from '../../../components/card';
import { IProductCategoryTreeNodeViewModel } from './product-category.interface';

export interface IQuery {
  keyword: string;
  productCategoryId: string;
  tags?: string[];
}

export interface IQueryPayload {
  query: IQuery;
  skip: number;
  limit: number;
}

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
  productCategoryTree: {
    tree: IProductCategoryTreeNodeViewModel[];
  };
  totalCount: number;
}

export interface IProductCardsViewModel extends Cards {}
