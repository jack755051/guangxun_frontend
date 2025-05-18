import { Component, inject, Input } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { MatTableModule } from '@angular/material/table';
import {
  TechnicalSupportAction,
  TechnicalSupportFile,
} from '../../../models/interface/feature/technical-support.interface';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TechnicalSupportService } from '../services/technical-support.service';
@Component({
  selector: 'guangxun-technical-document',
  imports: [SharedStandaloneImports, MatTableModule, MatPaginatorModule],
  standalone: true,
  templateUrl: './technical-document.component.html',
  styleUrl: './technical-document.component.scss',
})
export class TechnicalDocumentComponent {
  @Input() dataSource: TechnicalSupportFile[] = [];
  displayedColumns: string[] = ['id', 'fileName', 'updatedAt', 'fileSize', 'action'];

  private _technicalSupportService = inject(TechnicalSupportService);

  actions: TechnicalSupportAction[] = [
    {
      label: '預覽',
      icon: 'preview',
      action: (fileNumber: string) => {
        this._technicalSupportService.onPreview(fileNumber);
      },
    },
    {
      label: '下載',
      icon: 'download',
      action: (fileNumber: string) => {
        this._technicalSupportService.onDownload(fileNumber);
      },
    },
  ];
}
