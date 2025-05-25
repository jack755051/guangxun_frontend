import { IServiceAndProductsState } from '../../models/interface/feature/service-and-products.ngrx.interface';
import { ArrangeType } from '../../components/card';
import { createFeature, createReducer, on } from '@ngrx/store';
import { ServiceAndProductsActions } from './action';

const initialState: IServiceAndProductsState = {
  queryPayload: {
    query: {
      keyword: '',
      productCategoryId: '',
      tags: [],
    },
    skip: 0,
    limit: 10,
  },
  viewModel: {
    cardList: {
      card: [],
      arrangeType: ArrangeType.LIST,
    },
    totalCount: 0,
  },
  loading: false,
  error: null,
};

export const ServiceAndProductsFeatures = createFeature({
  name: 'user-question-analysis-report',
  reducer: createReducer(
    initialState,

    on(ServiceAndProductsActions.loadServiceAndProducts, (state) => ({
      ...state,
      loading: false,
      error: null,
    })),
  ),
});
