import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../layouts/alert/alert.component';
import { FormComponent } from '../layouts/form/form.component';
import { RemindComponent } from '../layouts/remind/remind.component';
import { GxunDialogConfig } from '../model/interface/dialog-config.interface';
import { DialogType } from '../model';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private _dialog: MatDialog) {}

  openAlertDialog(config: GxunDialogConfig) {
    return this._dialog
      .open(AlertComponent, {
        data: {
          ...config,
          type: DialogType.ALERT,
        },
        width: config.width ?? '400px',
        height: config.height ?? '200px',
        panelClass: config.panelClass ?? 'dialog-alert-style',
      })
      .afterClosed();
  }

  openFormDialog(config: GxunDialogConfig) {
    return this._dialog
      .open(FormComponent, {
        data: {
          ...config,
          type: DialogType.FORM,
        },
        width: config.width ?? '400px',
        height: config.height ?? '200px',
        panelClass: config.panelClass ?? 'dialog-form-style',
      })
      .afterClosed();
  }

  openRemindDialog(config: GxunDialogConfig) {
    return this._dialog
      .open(RemindComponent, {
        data: {
          ...config,
        },
        width: config.width ?? '400px',
        height: config.height ?? '200px',
        panelClass: config.panelClass ?? 'dialog-remind-style',
      })
      .afterClosed();
  }
}
