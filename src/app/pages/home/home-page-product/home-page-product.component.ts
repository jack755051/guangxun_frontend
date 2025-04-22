import { Component, inject, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { CardComponent } from '../../../components/card/card.component';
import { ArrangeType, Cards } from '../../../components/card';
import { MockHomePageService } from '../../../mocks/services/mock-home-page.service';
import { AppConfigService } from '../../../app-config.service';

@Component({
  selector: 'guangxun-home-page-product',
  imports: [SharedStandaloneImports, CardComponent],
  standalone: true,
  templateUrl: './home-page-product.component.html',
  styleUrl: './home-page-product.component.scss',
})
export class HomePageProductComponent implements OnInit {
  cards!: Cards;
  centerIndex: number = 0;

  readonly ArrangeType = ArrangeType;

  private _mockHomePageService = inject(MockHomePageService);
  private _appConfig = inject(AppConfigService);
  constructor() {}

  ngOnInit(): void {
    // 如果 isMockMode 為 true，則使用 mock 資料
    if (this._appConfig.isMockMode) {
      this._mockHomePageService.getMockProducts();
      this._mockHomePageService.mockProducts$.subscribe((cards) => {
        this.cards = cards;
        console.log(cards);
      });
    }
  }
}
