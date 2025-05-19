import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { inject, Injectable } from '@angular/core';
import { catchError, concat, concatMap, map, of, tap } from 'rxjs';
import { ServiceAndProductsActions } from './action';
import { ApiService as ProductCategoryApiService } from '../../apis/technical-support/api.service';

@Injectable()
export class ServiceAndProductsEffects {
  private _store = inject(Store);
  private _actions$ = inject(Actions);
  private _productCategoryApiService = inject(ProductCategoryApiService);

  constructor() {}

  loadProductCategoryTree$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ServiceAndProductsActions.loadProductCategoryTree),
      concatMap(() =>
        concat(
          of(ServiceAndProductsActions.loadProductCategoryTreeLoading()),
          this._productCategoryApiService.getTechnicalCategoryTree().pipe(
            map((res) =>
              ServiceAndProductsActions.loadProductCategoryTreeSuccess({
                productCategoryTree: res,
              }),
            ),
            catchError((error) => {
              console.error('Error loading product category tree:', error);
              return of(ServiceAndProductsActions.loadProductCategoryTreeFailure({ error }));
            }),
          ),
        ),
      ),
    ),
  );
}
