import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { inject, Injectable } from '@angular/core';
import { catchError, concat, concatMap, map, of, tap } from 'rxjs';
import { ServiceAndProductsActions } from './action';
import { ApiService } from '../../apis/products/api.service';

@Injectable()
export class ServiceAndProductsEffects {
  private _store = inject(Store);
  private _actions$ = inject(Actions);
  private _productCategoryApiService = inject(ApiService);

  constructor() {}

  // 搜索類別
  loadProductCategoryTree$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ServiceAndProductsActions.loadProductCategoryTree),
      tap(() => this._store.dispatch(ServiceAndProductsActions.loadProductCategoryTreeLoading())),
      concatMap(() =>
        this._productCategoryApiService.getProductCategoryTree().pipe(
          map((response) =>
            ServiceAndProductsActions.loadProductCategoryTreeSuccess({
              productCategoryTree: response,
            }),
          ),
          catchError((error) =>
            of(ServiceAndProductsActions.loadProductCategoryTreeFailure({ error })),
          ),
        ),
      ),
    ),
  );

  // 執行資料搜索
  loadServiceAndProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ServiceAndProductsActions.loadServiceAndProducts),
      tap(() => this._store.dispatch(ServiceAndProductsActions.loadServiceAndProductsLoading())),
      concatMap(() =>
        this._productCategoryApiService.getProductCategoryCards().pipe(
          map((response) =>
            ServiceAndProductsActions.loadServiceAndProductsSuccess({
              serviceAndProducts: response,
            }),
          ),
          catchError((error) =>
            of(ServiceAndProductsActions.loadServiceAndProductsFailure({ error })),
          ),
        ),
      ),
    ),
  );
}
