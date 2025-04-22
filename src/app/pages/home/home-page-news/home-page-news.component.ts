import { Component, inject, Input, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MockHomePageService } from '../../../mocks/services/mock-home-page.service';
import {
  ExpansionPanelItem,
  ExpansionPanelType,
  NewsTypeContent,
} from '../../../models/interface/feature/expansion-panel.interface';
import { AppConfigService } from '../../../app-config.service';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HomePageNewsIcons } from '../../../shared/fa-icon';
import { FaIcon } from '../../../components/dialog/model/interface/faicon.interface';
@Component({
  selector: 'guangxun-home-page-news',
  imports: [MatExpansionModule, SharedStandaloneImports],
  standalone: true,
  templateUrl: './home-page-news.component.html',
  styleUrl: './home-page-news.component.scss',
})
export class HomePageNewsComponent implements OnInit {
  @Input() news: ExpansionPanelItem[] = [];
  hoverIndex: number | null = null;

  private _mockHomePageService = inject(MockHomePageService);
  private _appConfig = inject(AppConfigService);
  constructor() {}

  ngOnInit(): void {
    // 如果 isMockMode 為 true，則使用 mock 資料
    if (this._appConfig.isMockMode) {
      this._mockHomePageService.getMockNews();
      this._mockHomePageService.mockNews$.subscribe((news) => {
        this.news = news.map((item) => ({
          ...item,
          header: {
            ...item.header,
            icon: this.getIcon(item),
          },
        }));
      });
    }
  }

  // ---- 以下為擴充功能 start ----

  private readonly iconMap: Record<ExpansionPanelType, IconDefinition> = {
    [ExpansionPanelType.FIRE]: HomePageNewsIcons.faFire,
    [ExpansionPanelType.LIVE]: HomePageNewsIcons.faGaugeHigh,
    [ExpansionPanelType.TECHNICAL_SUPPORT]: HomePageNewsIcons.faMicrochip,
  };

  getIcon(item: ExpansionPanelItem): FaIcon {
    return {
      icon: this.iconMap[item.type],
      label: item.header.title, // 或任何你想要加上的 label
    };
  }

  isNewsTypeContent(content: string | NewsTypeContent): content is NewsTypeContent {
    return (
      typeof content !== 'string' && content !== null && 'date' in content && 'content' in content
    );
  }

  onHover(index: number, isHovering: boolean): void {
    this.hoverIndex = isHovering ? index : null;
  }

  // ---- 以下為擴充功能 end ----
}
