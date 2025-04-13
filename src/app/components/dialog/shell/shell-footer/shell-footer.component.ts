import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
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
export class ShellFooterComponent implements OnInit {
  // 對話框類型å
  @Input() type!: DialogType;
  // 按鈕陣列
  @Input() buttons: DialogButton[] = [];
  // 關閉按鈕(右上角關閉按鈕)
  @Output() close = new EventEmitter<void>();
  // 確認按鈕
  @Output() confirm = new EventEmitter<void>();
  // 提交按鈕
  @Output() submit = new EventEmitter<void>();

  readonly DialogType = DialogType;
  readonly DialogButtonType = DialogButtonType;

  displayButtons: DialogButton[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.buttons?.length) {
      this.displayButtons = this.buttons;
    } else {
      this.displayButtons = this.getDefaultButtons(this.type);
    }
  }

  /**
   * 取得預設按鈕
   * @param type 對話框類型
   * @returns 按鈕陣列
   */
  getDefaultButtons(type: DialogType): DialogButton[] {
    switch (type) {
      case 'alert':
      case 'remind':
        return [
          {
            type: DialogButtonType.CONFIRM,
            label: 'Close',
          },
        ];
      case 'form':
        return [
          { type: DialogButtonType.SUBMIT, label: 'Submit' },
          {
            type: DialogButtonType.CANCEL,
            label: 'Cancel',
          },
        ];
      case 'confirm':
        return [
          { type: DialogButtonType.CONFIRM, label: 'Confirm' },
          {
            type: DialogButtonType.CANCEL,
            label: 'Cancel',
          },
        ];
      default:
        return [
          {
            type: DialogButtonType.CANCEL,
            label: 'Close',
          },
        ];
    }
  }

  /**
   * 按鈕點擊事件
   * @param button 按鈕
   */
  onButtonClick(button: DialogButton): void {
    if (button.action) {
      button.action();
      return;
    }

    switch (this.type) {
      case 'alert':
      case 'remind':
        this.close.emit();
        break;

      case 'confirm':
        if (button.type === DialogButtonType.CONFIRM) {
          this.confirm.emit(); // 要由使用者接 confirm 行為
        } else {
          this.close.emit(); // 取消使用 close
        }
        break;

      case 'form':
        if (button.type === DialogButtonType.SUBMIT) {
          this.submit.emit(); // 要由使用者接 submit 行為
        } else {
          this.close.emit();
        }
        break;

      default:
        this.close.emit();
    }
  }
}
