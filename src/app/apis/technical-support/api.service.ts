import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITechnicalCategoryResponse } from './res.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = '';
  }

  getTechnicalCategoryTree(): Observable<ITechnicalCategoryResponse> {
    const url = `${this._baseUrl}/api/technical-support/category`;
    return this._httpClient.get<ITechnicalCategoryResponse>(url);
  }
}
