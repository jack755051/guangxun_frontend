import { Component, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
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
  @Input() button!: CardItemButton;
  @Input() className = '';
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  @Input() buttonTemplate?: TemplateRef<any>;
  @Output() click = new EventEmitter<CardItemButton>();

  protected readonly BUTTON_CLASS_MAP = BUTTON_CLASS_MAP;

  onClick() {
    if (!this.button.disabled) {
      this.click.emit(this.button);
    }
  }
}
