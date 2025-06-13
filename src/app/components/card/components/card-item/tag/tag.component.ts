import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ArrangeType, CardItemTag, TAG_CLASS_MAP } from '../../..';

@Component({
  selector: 'guangxun-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input() tag: CardItemTag = { label: '', action: () => {} };
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  @Output() click = new EventEmitter<CardItemTag>();

  @HostBinding('class')
  get hostClass(): string {
    return TAG_CLASS_MAP[this.arrangeType] ?? '';
  }

  onClick() {
    if (!this.tag.disabled) {
      this.click.emit(this.tag);
    }
  }
}
