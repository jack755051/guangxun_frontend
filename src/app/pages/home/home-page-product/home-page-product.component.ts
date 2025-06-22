import { Component, inject, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { HomePage } from '../../../utils/factory/mock-or-real/abstract/home-page';
import {
  Cards,
  ArrangeType,
  GuangxunCardComponent,
  CardItem,
  CardItemTag,
  CardItemButton,
} from '@sanring/guangxun-card';

@Component({
  selector: 'guangxun-home-page-product',
  imports: [SharedStandaloneImports, GuangxunCardComponent],
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
        card: cards.card.map((item: any) => ({
          ...item,
        })),
      };
    });
  }

  onTagClicked(event: { card: CardItem; tag: CardItemTag }) {}
  onButtonClicked(event: { card: CardItem; button: CardItemButton }) {}
  onCardClicked(card: CardItem) {}
}
