import { Component, inject, Input, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MockHomePageService } from '../../../mocks/services/mock-home-page.service';
import { ExpansionPanelItem } from '../../../models/interface/feature/expansion-panel.interface';
import { AppConfigService } from '../../../app-config.service';
import { SharedStandaloneImports } from '../../../shared/shared-imports';

@Component({
  selector: 'guangxun-home-page-news',
  imports: [MatExpansionModule,SharedStandaloneImports],
  standalone: true,
  templateUrl: './home-page-news.component.html',
  styleUrl: './home-page-news.component.scss',
})
export class HomePageNewsComponent implements OnInit {
  @Input() news: ExpansionPanelItem[] = [];

  private _mockHomePageService = inject(MockHomePageService);
  private _appConfig = inject(AppConfigService);
  constructor() {}

  ngOnInit(): void {
    // 如果 isMockMode 為 true，則使用 mock 資料
    if (this._appConfig.isMockMode) {
      this._mockHomePageService.getMockNews();
      this._mockHomePageService.mockNews$.subscribe((news) => {
        this.news = news;
      });
    }
  }
}
