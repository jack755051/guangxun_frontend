import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IContactReqDto } from "./req.dto";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = '';
  }

  sendContactForm(data: IContactReqDto) {
    const url = `${this._baseUrl}/api/contact`;
    return this._httpClient.post(url, data).pipe(
      map((response: any) => {
        return {
          success: response.success,
          message: response.message,
          data: response.data,
        };
  }
      )
    );
  }
}
