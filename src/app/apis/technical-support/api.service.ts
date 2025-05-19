import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITechnicalCategoryResponse } from './res.dto';
import { Observable } from 'rxjs';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = '';
  }

  getProductCategoryTree(): Observable<ITechnicalCategoryResponse> {
    const url = `${this._baseUrl}/api/technical-support/category`;
    return this._httpClient.get<ITechnicalCategoryResponse>(url);
  }
}
