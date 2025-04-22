import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ArrangeType, BUTTON_CLASS_MAP, CardItemButton } from '../../..';
import { SharedStandaloneImports } from '../../../../../shared/shared-imports';

@Component({
  selector: 'guangxun-button',
  imports: [SharedStandaloneImports],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() button: CardItemButton = { label: '', action: () => {} };
  @Output() buttonClick = new EventEmitter<void>();
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  get buttonClass(): string {
    return BUTTON_CLASS_MAP[this.arrangeType] ?? '';
  }

  onClick(): void {
    if (this.button?.action) {
      this.button.action(); // 呼叫傳入的 callback
    }

    this.buttonClick.emit(); // 向外部 emit 事件
  }
}
