import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITechnicalSupportFileViewModel } from '../../models/interface/feature/technical-support.interface';
import { ITechnicalSupportFileViewModelReqDto } from './req.dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = '';
  }

  /** Page technical support */
  getTechnicalDocuments(req:ITechnicalSupportFileViewModelReqDto): Observable<ITechnicalSupportFileViewModel[]> {
    const url = `${this._baseUrl}/api/product-services/technical-documents`;
    return this._httpClient
      .get<ITechnicalSupportFileViewModel[]>(url, {
        params: { ...req }
      });
  }
}
