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
    productCategoryTree: {
      tree: [],
    },
    totalCount: 0,
  },
  loading: false,
  error: null,
};

export const ServiceAndProductsFeatures = createFeature({
  name: 'service-and-products',
  reducer: createReducer(
    initialState,

    on(ServiceAndProductsActions.loadServiceAndProducts, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),

    // ---- Update query payload START ----
    on(ServiceAndProductsActions.updateQuery, (state, { query, skip, limit }) => ({
      ...state,
      queryPayload: {
        query: {
          ...state.queryPayload.query,
          ...query,
        },
        skip: skip ?? state.queryPayload.skip,
        limit: limit ?? state.queryPayload.limit,
      },
    })),
    // ---- Update query payload OVER ----
    // ---- Service and Products START----
    on(
      ServiceAndProductsActions.loadServiceAndProductsSuccess,
      (state, { serviceAndProducts }) => ({
        ...state,
        viewModel: {
          ...state.viewModel,
          serviceAndProducts,
        },
        loading: false,
      }),
    ),

    on(ServiceAndProductsActions.loadServiceAndProductsFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),
    // ---- Service and Products OVER----
    // --- Category Tree START----
    on(
      ServiceAndProductsActions.loadProductCategoryTreeSuccess,
      (state, { productCategoryTree }) => ({
        ...state,
        viewModel: {
          ...state.viewModel,
          tree: productCategoryTree,
        },
        loading: false,
      }),
    ),

    on(ServiceAndProductsActions.loadProductCategoryTreeFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),
    // --- Category Tree OVER ----
  ),
});
