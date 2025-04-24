import { Component, inject, Input, OnInit } from '@angular/core';
import { Cards } from './models/card.interface';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ArrangeType } from './models/card.enum';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { CardArrangeTypeIcons } from './models/fa-icon';
import { ARRANGE_TYPE_META_MAP, TOGGLABLE_ARRANGE_TYPES } from '.';

@Component({
  selector: 'guangxun-card',
  imports: [SharedStandaloneImports, CardItemComponent, ToggleComponent],
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

  toggleOptions = TOGGLABLE_ARRANGE_TYPES;

  constructor() {}

  ngOnInit(): void {
    const currentType = this.cards.arrangeType;
    this.isShowArrangeType = ARRANGE_TYPE_META_MAP[currentType].showInToggle;
    this.arrangeTypeIcon = ARRANGE_TYPE_META_MAP[currentType].icon;

    this.toggleOptions = Object.entries(ARRANGE_TYPE_META_MAP)
      .filter(([_, meta]) => meta.showInToggle)
      .map(([key]) => key as ArrangeType);
  }

  onArrangeTypeToggle(arrangeType: ArrangeType) {
    this.cards.arrangeType = arrangeType;
  }
}
