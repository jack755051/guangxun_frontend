import { Component, inject, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionPanelComponent } from '../../feature/expansion-panel/expansion-panel.component';
import { getExpansionIcon } from '../../feature/expansion-panel';
import { INewsTypeContentViewModel } from '../../models/interface/feature/expansion-panel.interface';
import { MockHomePageService } from '../../mocks/services/mock-home-page.service';

@Component({
  selector: 'guangxun-news',
  imports: [MatExpansionModule, SharedStandaloneImports, ExpansionPanelComponent],
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  news: INewsTypeContentViewModel[] = [];
  _mockCards = inject(MockHomePageService);

  constructor() {}
  ngOnInit(): void {
    this._mockCards.getNews().subscribe((news) => {
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
