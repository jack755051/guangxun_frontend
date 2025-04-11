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
  selector: 'guangxun-remind',
  imports: [
    CommonModule,
    FontAwesomeModule,
    DialogShellComponent,
    ShellHeaderComponent,
    ShellFooterComponent,
    ShellContentComponent,
  ],
  templateUrl: './remind.component.html',
  styleUrls: ['./remind.component.scss', '../../assets/style.scss'],
})
export class RemindComponent extends AbstractDialogComponent<GxunDialogConfig> {}
