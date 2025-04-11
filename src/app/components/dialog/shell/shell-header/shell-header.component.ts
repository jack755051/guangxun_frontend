import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogType } from '../../model';
import { FaIcon, FaIconsList } from '../../model/interface/faicon.interface';

@Component({
  selector: 'guangxun-shell-header',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './shell-header.component.html',
  styleUrl: './shell-header.component.scss',
})
export class ShellHeaderComponent {
  @Input() title!: string;
  @Input() type: DialogType = DialogType.ALERT;
  @Output() close = new EventEmitter<void>();
  readonly DialogType = DialogType;
  readonly FaIconsList = FaIconsList;

  /**
   * 取得圖示
   * @param type 對話框類型
   * @returns 圖示
   */
  getFaIcon(type: DialogType): FaIcon {
    switch (type) {
      case 'alert':
        return { icon: FaIconsList.faCircleXmark };
      case 'confirm':
        return { icon: FaIconsList.faCircleQuestion };
      case 'form':
        return { icon: FaIconsList.faIndent };
      default:
        return { icon: FaIconsList.faCircleExclamation };
    }
  }

  getTypeClass(type: DialogType): string {
    return `dialog-${type}-header`;
  }
}
