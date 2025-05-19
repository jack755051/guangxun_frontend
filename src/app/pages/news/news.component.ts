import { Component, inject, OnInit } from '@angular/core';
import { MockHomePageService } from '../../mocks/services/mock-home-page.service';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionPanelComponent } from '../../feature/expansion-panel/expansion-panel.component';
import { ExpansionPanelItem, getExpansionIcon } from '../../feature/expansion-panel';
import { mockOrRealConfig } from '../../config/mock-or-real.config';

@Component({
  selector: 'guangxun-news',
  imports: [MatExpansionModule, SharedStandaloneImports, ExpansionPanelComponent],
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  news: ExpansionPanelItem[] = [];
  hoverIndex: number | null = null;

  private _mockHomePageService = inject(MockHomePageService);

  constructor() {}
  ngOnInit(): void {
    // 如果 isMockMode 為 true，則使用 mock 資料
    if (mockOrRealConfig.isMock) {
      this._mockHomePageService.getMockNews();
      this._mockHomePageService.mockNews$.subscribe((news) => {
        this.news = news.map((item) => ({
          ...item,
          header: {
            ...item.header,
            icon: getExpansionIcon(item.type, item.header.title),
          },
        }));
      });
    }
  }
}
