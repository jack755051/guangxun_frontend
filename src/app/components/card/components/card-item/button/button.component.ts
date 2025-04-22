import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardItemButton } from '../../..';

@Component({
  selector: 'guangxun-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() button: CardItemButton = { label: '', action: () => {} };
  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    if (this.button?.action) {
      this.button.action(); // 呼叫傳入的 callback
    }

    this.buttonClick.emit(); // 向外部 emit 事件
  }
}
