import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ServiceAndProductsActions } from '../ngrx/service-and-products/action';
import { TransMapper } from '../utils/mapper/transMapper';
import { selectQueryPayloadStates } from '../ngrx/service-and-products/selector';
import { take } from 'rxjs';
import {
  IQuery,
  IServiceAndProductsState,
} from '../models/interface/feature/service-and-products.ngrx.interface';

@Injectable({
  providedIn: 'root',
})
export class UpdateQueryService {
  private _store = inject(Store);
  limit: number = 10;
  pageIndex: number = 1;
  constructor() {}

  // 取得 node tree
  getNodeTree() {
    this._store.dispatch(ServiceAndProductsActions.loadProductCategoryTree());
  }

  // 更新關鍵字到store
  updateQuery(query: Partial<IQuery>) {
    this._store.dispatch(ServiceAndProductsActions.updateQuery({ query }));
  }

  // 設置查詢條件（頁數）
  setConditions(pageIndex: number, limit: number) {
    const { skip, limit: actualLimit } = TransMapper.pageViewMoelToDTO(pageIndex, limit);

    this._store
      .select(selectQueryPayloadStates)
      .pipe(take(1))
      .subscribe((res) => {
        const query = res?.query ?? {};
        this._store.dispatch(
          ServiceAndProductsActions.updateQuery({
            query,
            skip,
            limit,
          }),
        );
      });
  }

  // 執行搜索
  searchProduct() {
    this._store.dispatch(ServiceAndProductsActions.loadServiceAndProducts());
  }
}
