import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'base_template';

  constructor(private _translate: TranslateService) {
    // 定義支援的語系（一定要和檔名一致）
    const supportedLangs = ['en', 'zh-Hant'];

    this._translate.addLangs(supportedLangs);
    this._translate.setDefaultLang('zh-Hant');

    // 偵測瀏覽器語言（如 zh-TW、zh-CN 等）
    const browserLang = this._translate.getBrowserLang();

    // 根據 zh 開頭的語言都轉為 zh-Hant，其它則為 en
    const matchedLang = browserLang?.startsWith('zh') ? 'zh-Hant' : 'en';

    this._translate.use(matchedLang);
  }

  //Switch system language
  switchLanguage(lang: string) {
    this._translate.use(lang);
  }
}
