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
  @Output() click = new EventEmitter<CardItemButton>();
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  get buttonClass(): string {
    return BUTTON_CLASS_MAP[this.arrangeType] ?? '';
  }

  onClick() {
    if (!this.button.disabled) {
      this.click.emit(this.button);
    }
  }
}
