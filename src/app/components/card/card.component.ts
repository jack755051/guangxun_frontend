import { Component, inject, Input, OnInit } from '@angular/core';
import { Cards } from './models/card.interface';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { CardItemComponent } from './card-item/card-item.component';
import { ArrangeType } from './models/card.enum';
import { CardService } from './service/card.service';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { CardArrangeTypeIcons } from './models/fa-icon';

@Component({
  selector: 'guangxun-card',
  imports: [SharedStandaloneImports, CardItemComponent],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  // 卡片
  @Input() cards!: Cards;
  // 中心卡片索引
  centerIndex: number = 0;
  // 是否顯示排列方式
  isShowArrangeType: boolean = false;
  // 排列方式圖示
  arrangeTypeIcon: IconDefinition = CardArrangeTypeIcons.faList;
  // 排列方式
  readonly ArrangeType = ArrangeType;
  readonly CardArrangeTypeIcons = CardArrangeTypeIcons;
  // 卡片服務
  private _cardService = inject(CardService);

  constructor() {}

  ngOnInit(): void {
    this.isShowArrangeType = this._cardService.isShowArrangeType(this.cards.arrangeType);
    this.arrangeTypeIcon = this._cardService.getArrangeTypeIcon(this.cards.arrangeType);
  }
}
