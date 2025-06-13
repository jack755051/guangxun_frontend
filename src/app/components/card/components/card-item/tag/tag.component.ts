import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { ArrangeType, CardItemTag, TAG_CLASS_MAP } from '../../..';
import { NgIf } from '@angular/common';

@Component({
  selector: 'guangxun-tag',
  imports: [NgIf],
  standalone: true,
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent implements AfterContentInit {
  @Input() tag: CardItemTag = { label: '', action: () => {} };
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  @Output() click = new EventEmitter<CardItemTag>();

  hasCustomContent = false;

  @ContentChild('customTagContent') customTagContent?: ElementRef;

  @HostBinding('class')
  get hostClass(): string {
    return TAG_CLASS_MAP[this.arrangeType] ?? '';
  }

  ngAfterContentInit() {
    this.hasCustomContent = !!this.customTagContent;
  }

  onClick() {
    if (!this.tag.disabled) {
      this.click.emit(this.tag);
    }
  }
}
