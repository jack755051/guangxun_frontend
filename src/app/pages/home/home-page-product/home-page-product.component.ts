import { Component, inject, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import {
  Cards,
  ArrangeType,
  GuangxunCardComponent,
  CardItem,
  CardItemTag,
  CardItemButton,
} from '@sanring/guangxun-card';
import { MockHomePageService } from '../../../mocks/services/mock-home-page.service';

@Component({
  selector: 'guangxun-home-page-product',
  imports: [SharedStandaloneImports, GuangxunCardComponent],
  standalone: true,
  templateUrl: './home-page-product.component.html',
  styleUrl: './home-page-product.component.scss',
})
export class HomePageProductComponent implements OnInit {
  cards!: Cards;
  _mockCards = inject(MockHomePageService);
  readonly ArrangeType = ArrangeType;
  constructor() {}

  ngOnInit(): void {
    this._mockCards.getProducts().subscribe((cards) => {
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
