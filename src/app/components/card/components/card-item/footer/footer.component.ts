import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { SharedStandaloneImports } from '../../../../../shared/shared-imports';
import { ArrangeType, CardItemButton, FOOTER_CLASS_MAP } from '../../..';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'guangxun-footer',
  imports: [SharedStandaloneImports, ButtonComponent],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  @Input() className = '';
  @Input() actions?: CardItemButton[] = [];
  @Output() buttonClick = new EventEmitter<CardItemButton>();

  onButtonClick(button: CardItemButton) {
    this.buttonClick.emit(button);
  }

  @HostBinding('class')
  get hostClass(): string {
    return FOOTER_CLASS_MAP[this.arrangeType] ?? '';
  }
}
