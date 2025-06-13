import { Component, inject, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { CardComponent } from '../../../components/card/card.component';
import {
  ArrangeType,
  CardItem,
  CardItemButton,
  CardItemTag,
  Cards,
} from '../../../components/card';
import { MockHomePageService } from '../../../mocks/services/mock-home-page.service';
import { mockOrRealConfig } from '../../../config/mock-or-real.config';
import { HomePage } from '../../../utils/factory/mock-or-real/abstract/home-page';

@Component({
  selector: 'guangxun-home-page-product',
  imports: [SharedStandaloneImports, CardComponent],
  standalone: true,
  templateUrl: './home-page-product.component.html',
  styleUrl: './home-page-product.component.scss',
})
export class HomePageProductComponent implements OnInit {
  cards!: Cards;
  private readonly _homePage = inject(HomePage);
  centerIndex: number = 0;

  readonly ArrangeType = ArrangeType;
  constructor() {}

  ngOnInit(): void {
    this._homePage.getProducts().subscribe((cards) => {
      this.cards = {
        arrangeType: cards.arrangeType,
        card: cards.card.map((item) => ({
          ...item,
        })),
      };
    });
  }

  onTagClicked(event: { card: CardItem; tag: CardItemTag }) {}
  onButtonClicked(event: { card: CardItem; button: CardItemButton }) {}
  onCardClicked(card: CardItem) {}
}
