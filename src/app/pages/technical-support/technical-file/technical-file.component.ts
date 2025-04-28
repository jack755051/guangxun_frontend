import { Component, Input } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { MatTableModule } from '@angular/material/table';
import {
  TechnicalSupportAction,
  TechnicalSupportFile,
} from '../../../models/interface/feature/technical-support.interface';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'guangxun-technical-file',
  imports: [SharedStandaloneImports, MatTableModule, MatPaginatorModule],
  standalone: true,
  templateUrl: './technical-file.component.html',
  styleUrl: './technical-file.component.scss',
})
export class TechnicalFileComponent {
  @Input() dataSource: TechnicalSupportFile[] = [];
  displayedColumns: string[] = ['id', 'fileName', 'updatedAt', 'fileSize', 'action'];
  actions: TechnicalSupportAction[] = [
    {
      label: '下載',
      icon: 'download',
      action: () => {},
    },
  ];
}
