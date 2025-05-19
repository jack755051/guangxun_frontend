import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ITechnicalCategoryResponse } from '../technical-support/res.dto';
import { GetProductCategory } from '../../utils/factory/mock-or-real/abstract/get-product-category';
import { IProductCategoryTreeNodeViewModel } from '../../models/interface/feature/product-category.interface';
import { ProductsMapper } from './mapper';

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
    const url = `${this._baseUrl}/api/technical-support/category`;
    return this._httpClient
      .get<ITechnicalCategoryResponse>(url)
      .pipe(
        map(
          (res) =>
            ProductsMapper.ProductsCategoryToViewModel(res) as IProductCategoryTreeNodeViewModel[],
        ),
      );
  }
}
