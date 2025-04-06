import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private translate = inject(TranslateService);
  private supportedLangs = ['en', 'zh-Hant'];
  private defaultLang = 'zh-Hant';

  constructor() {
        // 定義支援的語系（一定要和檔名一致）
    const supportedLangs = ['en', 'zh-Hant'];

    this.translate.addLangs(supportedLangs);
    this.translate.setDefaultLang('zh-Hant');

    // 偵測瀏覽器語言（如 zh-TW、zh-CN 等）
    const browserLang = this.translate.getBrowserLang();

    // 根據 zh 開頭的語言都轉為 zh-Hant，其它則為 en
    const matchedLang = browserLang?.startsWith('zh') ? 'zh-Hant' : 'en';

    this.translate.use(matchedLang);
  }

    //Switch system language
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  get currentLang(): string {
    return this.translate.currentLang;
  }

  translateInstant(key: string): string {
    return this.translate.instant(key);
  }

  getSupportedLangs(): string[] {
    return this.supportedLangs;
  }
}
