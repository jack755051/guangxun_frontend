import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogShellComponent } from '../../shell/dialog-shell.component';
import { AbstractDialogComponent } from '../../base/abstract-dialog.component';
import { GxunDialogConfig } from '../../model/interface/dialog-config.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShellHeaderComponent } from '../../shell/shell-header/shell-header.component';
import { ShellFooterComponent } from '../../shell/shell-footer/shell-footer.component';
import { ShellContentComponent } from '../../shell/shell-content/shell-content.component';
@Component({
  selector: 'guangxun-confirm',
  imports: [
    CommonModule,
    FontAwesomeModule,
    DialogShellComponent,
    ShellHeaderComponent,
    ShellFooterComponent,
    ShellContentComponent,
  ],
  standalone: true,
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss', '../../assets/style.scss'],
})
export class ConfirmComponent extends AbstractDialogComponent<GxunDialogConfig> {
  onDialogConfirm(): void {
    this.data.footer?.onConfirm?.(); // ✅ 執行外部傳入的 fallback
    this.dialogRef.close(true);      // ✅ 關閉 dialog 並傳 result
  }
}
