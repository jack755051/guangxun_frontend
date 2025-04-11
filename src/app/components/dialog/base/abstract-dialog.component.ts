import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Directive, Inject } from '@angular/core';
import { DialogButton } from '../model/interface/dialog-button.interface';
import { DialogType } from '../model';
import { DialogButtonType } from '../model/enum/dialog-button-dialog.enum';
import { FaIcon, FaIconsList } from '../model/interface/faicon.interface';

@Directive()
export abstract class AbstractDialogComponent<T, R = unknown> {
  readonly DialogType = DialogType;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: T,
    protected dialogRef: MatDialogRef<R>,
  ) {}

  close(result?: R): void {
    this.dialogRef.close(result);
  }

  onConfirm(result: R = true as R): void {
    this.close(result);
  }

  onDialogClose(): void {
    this.close();
  }

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
      case 'remind':
        return { icon: FaIconsList.faCircleExclamation };
      case 'form':
        return { icon: FaIconsList.faIndent };
      default:
        return { icon: FaIconsList.faCircleExclamation };
    }
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
        return [{ type: DialogButtonType.CONFIRM }];
      case 'confirm':
        return [{ type: DialogButtonType.CONFIRM }, { type: DialogButtonType.CANCEL }];
      default:
        return [];
    }
  }
}
