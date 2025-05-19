import { Component, inject, Input, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MockHomePageService } from '../../../mocks/services/mock-home-page.service';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { ExpansionPanelComponent } from '../../../feature/expansion-panel/expansion-panel.component';
import { ExpansionPanelItem, getExpansionIcon } from '../../../feature/expansion-panel';
import { mockOrRealConfig } from '../../../config/mock-or-real.config';
@Component({
  selector: 'guangxun-home-page-news',
  imports: [MatExpansionModule, SharedStandaloneImports, ExpansionPanelComponent],
  standalone: true,
  templateUrl: './home-page-news.component.html',
  styleUrl: './home-page-news.component.scss',
})
export class HomePageNewsComponent implements OnInit {
  @Input() news: ExpansionPanelItem[] = [];
  hoverIndex: number | null = null;
  private _mockHomePageService = inject(MockHomePageService);
  constructor() {}

  ngOnInit(): void {
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
