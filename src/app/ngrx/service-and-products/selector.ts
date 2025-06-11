import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IServiceAndProductsState } from '../../models/interface/feature/service-and-products.ngrx.interface';

export const Selectors = createFeatureSelector<IServiceAndProductsState>('service-and-products');

//取得查詢條件，含pagination資訊
export const selectQueryPayloadStates = createSelector(Selectors, (state) => state.queryPayload);

// 取得回傳資料
export const selectServiceAndProductsResult = createSelector(Selectors, (state) => state.viewModel);
