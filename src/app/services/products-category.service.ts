import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MockServiceAndProductsService } from '../mocks/services/mock-service-and-products.service';
import { IProductTypeTreeResDto } from '../apis/products/products.res.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductsCategoryService {
  private _httpClient = inject(HttpClient);
  private _mockServiceAndProductsService = inject(MockServiceAndProductsService);
  constructor() {}

  getProductsCategories(): Observable<IProductTypeTreeResDto[]> {
    const url = '';
    return this._httpClient.get<IProductTypeTreeResDto[]>(url);
  }

  getMockProductsCategories() {
    return this._mockServiceAndProductsService.getProductsCategories();
  }
}
