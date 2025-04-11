import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogShellComponent } from '../../shell/dialog-shell.component';
import { AbstractDialogComponent } from '../../base/abstract-dialog.component';
import { GxunDialogConfig } from '../../model/interface/dialog-config.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShellHeaderComponent } from '../../shell/shell-header/shell-header.component';
import { ShellFooterComponent } from '../../shell/shell-footer/shell-footer.component';

@Component({
  selector: 'guangxun-confirm',
  imports: [
    CommonModule,
    FontAwesomeModule,
    DialogShellComponent,
    ShellHeaderComponent,
    ShellFooterComponent,
  ],
  standalone: true,
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss',
})
export class ConfirmComponent extends AbstractDialogComponent<GxunDialogConfig> {}
