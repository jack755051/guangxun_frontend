import { Component, EventEmitter, inject, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { CardItem, CardItemButton, CardItemTag, Cards } from './models/card.interface';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ArrangeType } from './models/card.enum';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { CardArrangeTypeIcons } from './models/fa-icon';
import { ARRANGE_TYPE_META_MAP, TOGGLABLE_ARRANGE_TYPES } from '.';
import { ToggleOption } from './models/toggle-option.interface';
import { CardService } from './service/card.service';

@Component({
  selector: 'guangxun-card',
  imports: [SharedStandaloneImports, CardItemComponent, ToggleComponent],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent<T extends CardItem = CardItem> implements OnInit {
  // 卡片
  @Input() cards!: Cards<T>;
  @Input() cardTemplate!: TemplateRef<any>;
  @Input() centerIndex: number = 0;
  // 操作功能
  @Output() arrangeTypeChange = new EventEmitter<ArrangeType>();
  @Output() tagClick = new EventEmitter<{ card: CardItem; tag: CardItemTag }>();
  @Output() buttonClick = new EventEmitter<{ card: CardItem; button: CardItemButton }>();
  @Output() cardClick = new EventEmitter<CardItem>();

  _cardService = inject(CardService);
  // 是否顯示排列方式
  isShowArrangeType: boolean = false;
  // 排列方式圖示
  arrangeTypeIcon: IconDefinition = CardArrangeTypeIcons.faList;
  // 排列方式
  ArrangeType = ArrangeType;

  toggleOptions: ToggleOption[] = [];

  constructor() {}

  ngOnInit(): void {
    if (!this.cards) return;
    const meta = this._cardService.getMeta(this.cards.arrangeType);

    this.isShowArrangeType = meta.showInToggle;
    this.arrangeTypeIcon = meta.icon;
    this.toggleOptions = this._cardService.getToggleOptions();

    this.toggleOptions = Object.entries(ARRANGE_TYPE_META_MAP)
      .filter(([_, meta]) => meta.showInToggle)
      .map(([key, meta]) => ({
        value: key as ArrangeType,
        icon: meta.icon,
        label: meta.label,
      }));
  }

  onArrangeTypeToggle(arrangeType: ArrangeType) {
    this.cards.arrangeType = arrangeType;
    this.arrangeTypeChange.emit(arrangeType);
  }

  getContainerClass(type: ArrangeType): string {
    return `card-${type}`;
  }

  isCenterCard(index: number): boolean {
    return this.cards.arrangeType === ArrangeType.CENTER_STACK && index === this.centerIndex;
  }

  isCardItemType(card: unknown): card is CardItem {
    return (
      !!(card as CardItem)?.header && !!(card as CardItem)?.content && !!(card as CardItem)?.footer
    );
  }
}
