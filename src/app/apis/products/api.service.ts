import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ITechnicalCategoryResponse } from '../technical-support/res.dto';
import { GetProductCategory } from '../../utils/factory/mock-or-real/abstract/get-product-category';
import { IProductCategoryTreeNodeViewModel } from '../../models/interface/feature/product-category.interface';
import { ProductsMapper } from './mapper';
import { Cards } from '../../components/card';
import { IProductCategoryCardResDto, IProductCategoryTreeResDto } from './res.dto';
import { IProductCardsViewModel } from '../../models/interface/feature/service-and-products.ngrx.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements GetProductCategory {
  private readonly _httpClient = inject(HttpClient);
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = '';
  }

  getProductCategoryTree(): Observable<IProductCategoryTreeNodeViewModel[]> {
    const url = `${this._baseUrl}/api/product-services/category-tree`;
    return this._httpClient
      .get<IProductCategoryTreeResDto>(url)
      .pipe(
        map(
          (res) =>
            ProductsMapper.ProductsCategoryTreeToViewModel(
              res,
            ) as IProductCategoryTreeNodeViewModel[],
        ),
      );
  }

  getProductCategoryCards(): Observable<IProductCardsViewModel> {
    const url = `${this._baseUrl}/api/product-services/product-cards`;
    return this._httpClient
      .get<IProductCategoryCardResDto>(url)
      .pipe(map((res) => ProductsMapper.ProductsCardsToViewModel(res)));
  }
}
