import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { SharedStandaloneImports } from '../../../../shared/shared-imports';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { ArrangeType } from '../../models/card.enum';
import { ARRANGE_TYPE_META_MAP } from '../../models/arrange-type-class.map';

@Component({
  selector: 'guangxun-toggle',
  imports: [SharedStandaloneImports],
  standalone: true,
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  @Input() options: ArrangeType[] = [];
  @Input() selected!: ArrangeType;
  @Output() change = new EventEmitter<ArrangeType>();

  getIcon(type: ArrangeType): IconDefinition | undefined {
    return ARRANGE_TYPE_META_MAP[type]?.icon;
  }

  onSelect(type: ArrangeType) {
    this.change.emit(type);
  }
}
