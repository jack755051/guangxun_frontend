import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITechnicalCategoryResponse } from './res.dto';
import { Observable } from 'rxjs';
import { config } from '../../../config';
import { MockServiceAndProductsService } from '../../mocks/services/mock-service-and-products.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _mockServiceAndProductsService = inject(MockServiceAndProductsService);
  private readonly _config = config;
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = '';
  }

  getTechnicalCategoryTree(): Observable<ITechnicalCategoryResponse> {
    const url = `${this._baseUrl}/api/technical-support/category`;
    if (this._config.isMock) {
      return this._mockServiceAndProductsService.getProductsCategories();
    }
    return this._httpClient.get<ITechnicalCategoryResponse>(url);
  }
}
