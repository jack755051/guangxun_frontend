import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { forkJoin, map, Observable } from 'rxjs';

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    // Map 'zh-Hant' to the correct path for Traditional Chinese
    const langPath = lang === 'zh-Hant' ? 'zh-Hant' : lang;

    return forkJoin([
      this.http.get(`./assets/i18n/${langPath}/common.json`),
      this.http.get(`./assets/i18n/${langPath}/footer.json`),
      this.http.get(`./assets/i18n/${langPath}/navbar.json`),
    ]).pipe(
      map(([common, footer, navbar]) => ({
        ...common,
        ...footer,
        ...navbar,
      })),
    );
  }
}

export function TranslateLoad(http: HttpClient): TranslateLoader {
  return new CustomTranslateLoader(http);
}
