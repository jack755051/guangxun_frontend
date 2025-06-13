import { ArrangeType } from '../../../models/card.enum';
import { Component, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { SharedStandaloneImports } from '../../../../../shared/shared-imports';
import { CONTENT_CLASS_MAP } from '../../../models/arrange-type-class.map';
import { TagComponent } from '../tag/tag.component';
import { CardItemTag } from '../../..';

@Component({
  selector: 'guangxun-content',
  imports: [SharedStandaloneImports, TagComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  @Input() image?: string;
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() description: string = '';
  @Input() tags: CardItemTag[] = [];
  /** 額外 class，支援客製化 */
  @Input() className = '';
  @Input() tagTemplate?: TemplateRef<any>;

  @Output() tagClick = new EventEmitter<CardItemTag>();

  onTagClick(tag: CardItemTag) {
    this.tagClick.emit(tag);
  }

  @HostBinding('class')
  get hostClass(): string {
    return CONTENT_CLASS_MAP[this.arrangeType] ?? '';
  }
}
