import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { SearchBarComponent } from '../../feature/search-bar/search-bar.component';
import { TechnicalFileComponent } from './technical-file/technical-file.component';
import { TechnicalDocumentComponent } from './technical-document/technical-document.component';
import { MockHomePageService } from '../../mocks/services/mock-home-page.service';
import { TechnicalSupportFile } from '../../models/interface/feature/technical-support.interface';

@Component({
  selector: 'guangxun-technical-support',
  standalone: true,
  imports: [
    MatTabsModule,
    SearchBarComponent,
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

  private _mockHomePageService = inject(MockHomePageService);

  constructor() {}
  ngOnInit(): void {
    this._mockHomePageService.getMockTechnicalSupport();
    this._mockHomePageService.mockTechnicalSupport$.subscribe((data) => {
      this.fileDownloadDataSource = data.filter((item) => item.fileType === 'fileDownload');
      this.documentDataSource = data.filter((item) => item.fileType === 'document');
    });
  }

  onSearch(keyword: string) {
    this.keyword = keyword;
    console.log('executeSearch', keyword);
  }

  onKeywordChange(keyword: string) {
    this.keyword = keyword;
    console.log('onKeywordChange', keyword);
  }
}
