import { Component, Input } from '@angular/core';
import { SharedStandaloneImports } from '../../../../shared/shared-imports';
import { ArrangeType, CardItemButton } from '../..';
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
  @Input() actions?: CardItemButton[] = [];
}
