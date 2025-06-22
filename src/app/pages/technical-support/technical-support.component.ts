import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { TechnicalFileComponent } from './technical-file/technical-file.component';
import { TechnicalDocumentComponent } from './technical-document/technical-document.component';
import { TechnicalSupportFile } from '../../models/interface/feature/technical-support.interface';

@Component({
  selector: 'guangxun-technical-support',
  standalone: true,
  imports: [
    MatTabsModule,
    // SearchBarComponent,
    SharedStandaloneImports,
    TechnicalFileComponent,
    TechnicalDocumentComponent,
  ],
  templateUrl: './technical-support.component.html',
  styleUrl: './technical-support.component.scss',
})
export class TechnicalSupportComponent implements OnInit {
  keyword = '';
  fileDownloadDataSource: TechnicalSupportFile[] = [];
  documentDataSource: TechnicalSupportFile[] = [];
  constructor() {}
  ngOnInit(): void {}

  onSearch(keyword: string) {
    this.keyword = keyword;
    console.log('executeSearch', keyword);
  }

  onKeywordChange(keyword: string) {
    this.keyword = keyword;
    console.log('onKeywordChange', keyword);
  }
}
