import { Component, inject, Input, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { ExpansionPanelComponent } from '../../../feature/expansion-panel/expansion-panel.component';
import { getExpansionIcon } from '../../../feature/expansion-panel';
import { INewsTypeContentViewModel } from '../../../models/interface/feature/expansion-panel.interface';
import { MockHomePageService } from '../../../mocks/services/mock-home-page.service';
@Component({
  selector: 'guangxun-home-page-news',
  imports: [MatExpansionModule, SharedStandaloneImports, ExpansionPanelComponent],
  standalone: true,
  templateUrl: './home-page-news.component.html',
  styleUrl: './home-page-news.component.scss',
})
export class HomePageNewsComponent implements OnInit {
  @Input() news: INewsTypeContentViewModel[] = [];
  _mock = inject(MockHomePageService);
  hoverIndex: number | null = null;
  constructor() {}

  ngOnInit(): void {
    this._mock.getNews().subscribe((news) => {
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
