import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { SharedStandaloneImports } from '../../../../shared/shared-imports';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { ArrangeType } from '../../models/card.enum';
import { ARRANGE_TYPE_META_MAP } from '../../models/arrange-type-class.map';
import { ToggleOption } from '../../models/toggle-option.interface';

@Component({
  selector: 'guangxun-toggle',
  imports: [SharedStandaloneImports],
  standalone: true,
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  @Input() options: ToggleOption[] = [];
  @Input() selected!: ArrangeType;
  @Output() change = new EventEmitter<ArrangeType>();

  getIcon(type: ArrangeType): IconDefinition | undefined {
    return ARRANGE_TYPE_META_MAP[type]?.icon;
  }

  // ✅ 這裡傳進來的是 ToggleOption，而不是 ArrangeType
  onSelect(option: ToggleOption) {
    this.change.emit(option.value); // 只發出其中的 ArrangeType
  }
}
