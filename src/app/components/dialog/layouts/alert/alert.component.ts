import { Component } from '@angular/core';
import { AbstractDialogComponent, GxunDialogConfig, DialogShellComponent } from '../..';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShellFooterComponent } from '../../shell/shell-footer/shell-footer.component';

@Component({
  selector: 'guangxun-alert',
  imports: [CommonModule, FontAwesomeModule, DialogShellComponent, ShellFooterComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent extends AbstractDialogComponent<GxunDialogConfig> {}
