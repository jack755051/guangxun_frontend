import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogType } from '../../model';
import { DialogButton } from '../../model/interface/dialog-button.interface';
import { DialogButtonType } from '../../model/enum/dialog-button-dialog.enum';

@Component({
  selector: 'guangxun-shell-footer',
  imports: [FontAwesomeModule, CommonModule],
  standalone: true,
  templateUrl: './shell-footer.component.html',
  styleUrl: './shell-footer.component.scss',
})
export class ShellFooterComponent {
  @Input() type!: DialogType;
  @Input() buttons: DialogButton[] = [];
  @Output() close = new EventEmitter<void>();
  readonly DialogType = DialogType;
  readonly DialogButtonType = DialogButtonType;

  displayButtons: DialogButton[] = [];

  constructor() {}

  ngOnInit(): void {
    this.displayButtons = this.buttons?.length ? this.buttons : this.getDefalutButtons(this.type);
  }

  /**
   * 取得預設按鈕
   * @param type 對話框類型
   * @returns 按鈕陣列
   */
  getDefalutButtons(type: DialogType): DialogButton[] {
    switch (type) {
      case 'alert':
      case 'remind':
        return [
          {
            type: DialogButtonType.CONFIRM,
            label: 'Close',
            action: () => this.close.emit(),
          },
        ];
      case 'form':
        return [
          { type: DialogButtonType.SUBMIT, label: 'Submit' },
          {
            type: DialogButtonType.CANCEL,
            label: 'Cancel',
            action: () => this.close.emit(),
          },
        ];
      case 'confirm':
        return [
          { type: DialogButtonType.CONFIRM, label: 'Confirm' },
          {
            type: DialogButtonType.CANCEL,
            label: 'Cancel',
            action: () => this.close.emit(),
          },
        ];
      default:
        return [];
    }
  }
}
