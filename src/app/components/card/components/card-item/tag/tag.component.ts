import { Component, Input } from '@angular/core';
import { CardItemTag } from '../../..';

@Component({
  selector: 'guangxun-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input() tag: CardItemTag = { label: '', action: () => {} };

  onClick() {
    if (this.tag.disabled) {
      return;
    }
    this.tag.action();
    console.log('onClick', this.tag.label);
  }
}
