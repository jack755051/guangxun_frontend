import { Component, HostBinding, Input } from '@angular/core';
import { ArrangeType } from '../../../models/card.enum';
import { SharedStandaloneImports } from '../../../../../shared/shared-imports';
import {
  CardItemHeaderAvatar,
  CardItemHeaderFaIcon,
  CardItemHeaderImage,
  HEADER_CLASS_MAP,
} from '../../..';
@Component({
  selector: 'guangxun-header',
  imports: [SharedStandaloneImports],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() avatar!: CardItemHeaderAvatar;
  @Input() title!: string;
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;

  @HostBinding('class')
  get hostClass(): string {
    return HEADER_CLASS_MAP[this.arrangeType] ?? '';
  }

  get avatarClass(): string | string[] {
    return (this.avatar as any)?.class ?? '';
  }

  isAvatarIcon(avatar: CardItemHeaderAvatar): avatar is CardItemHeaderFaIcon {
    return (avatar as CardItemHeaderFaIcon).icon !== undefined;
  }

  isAvatarImage(avatar: CardItemHeaderAvatar): avatar is CardItemHeaderImage {
    return (avatar as CardItemHeaderImage).link !== undefined;
  }
}
