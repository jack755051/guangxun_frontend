import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import {
  CardItemHeaderAvatar,
  CardItemHeaderFaIcon,
  CardItemHeaderImage,
} from '../models/card.type';
import { ArrangeType, CARD_CLASS_MAP, CardItem } from '..';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'guangxun-card-item',
  imports: [SharedStandaloneImports, HeaderComponent, ContentComponent, FooterComponent],
  standalone: true,
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent implements OnInit {
  @Input() cardItem!: CardItem;
  private _arrangeType: ArrangeType = ArrangeType.LIST;
  @Input()
  set arrangeType(value: ArrangeType) {
    this._arrangeType = value;
    this._setHostClass(); // 設定 class
  }
  get arrangeType(): ArrangeType {
    return this._arrangeType;
  }
  @HostBinding('class') hostClass = '';

  readonly ArrangeType = ArrangeType;
  private _setHostClass() {
    this.hostClass = this.getCardItemClass();
  }

  constructor() {}
  ngOnInit(): void {}

  // ---- 方法 start----

  get shouldShowHeader(): boolean {
    return this.arrangeType !== ArrangeType.LIST;
  }

  // 判斷是否為 icon
  isAvatarIcon(avatar: CardItemHeaderAvatar): avatar is CardItemHeaderFaIcon {
    return (avatar as CardItemHeaderFaIcon).icon !== undefined;
  }

  isAvatarImage(avatar: CardItemHeaderAvatar): avatar is CardItemHeaderImage {
    return (avatar as CardItemHeaderImage).link !== undefined;
  }

  getCardItemClass(): string {
    return CARD_CLASS_MAP[this.arrangeType] ?? '';
  }

  // ---- 方法 end----
}
