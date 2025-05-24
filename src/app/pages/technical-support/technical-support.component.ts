import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { SearchBarComponent } from '../../feature/search-bar/search-bar.component';
import { TechnicalFileComponent } from './technical-file/technical-file.component';
import { TechnicalDocumentComponent } from './technical-document/technical-document.component';
import { MockHomePageService } from '../../mocks/services/mock-home-page.service';
import { TechnicalSupportFile } from '../../models/interface/feature/technical-support.interface';
import { HomePage } from '../../utils/factory/mock-or-real/abstract/home-page';

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
  private readonly _homePage = inject(HomePage);
  constructor() {}
  ngOnInit(): void {
    this._homePage.getTechnicalSupports().subscribe((technicalSupports) => {
      this.documentDataSource = technicalSupports.filter((item) => item.fileType === 'document');
      this.fileDownloadDataSource = technicalSupports.filter(
        (item) => item.fileType === 'fileDownload',
      );
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
