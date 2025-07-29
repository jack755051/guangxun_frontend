import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { TechnicalFileComponent } from './technical-file/technical-file.component';
import { TechnicalDocumentComponent } from './technical-document/technical-document.component';
import { ITechnicalSupportFileViewModel } from '../../models/interface/feature/technical-support.interface';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import {
  TechnicalDocumentAndFileActions,
  selectTechnicalDocuments,
  selectTechnicalDocumentsLoading,
  selectTechnicalDocumentsError
} from '../../ngrx/technical-document-and-file';
import { TechnicalSupportFileType } from '../../models/enum/technical.enum';

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
export class TechnicalSupportComponent implements OnInit, OnDestroy {
  private _store = inject(Store);
  private _destroy$ = new Subject<void>();

  // NgRx 選擇器
  documents$: Observable<ITechnicalSupportFileViewModel[]> = this._store.select(selectTechnicalDocuments);
  loading$: Observable<boolean> = this._store.select(selectTechnicalDocumentsLoading);
  error$: Observable<any> = this._store.select(selectTechnicalDocumentsError);

  keyword = '';
  fileDownloadDataSource: ITechnicalSupportFileViewModel[] = [];
  documentDataSource: ITechnicalSupportFileViewModel[] = [];

  constructor() {}

  ngOnInit(): void {
    // 載入 Mock 資料
    this.loadMockData();

    // 訂閱資料變化並根據 fileType 分組
    this.documents$.pipe(
      takeUntil(this._destroy$),
      filter(documents => documents.length > 0)
    ).subscribe(documents => {
      this.documentDataSource = documents.filter(doc =>
        doc.fileType === TechnicalSupportFileType.DOCUMENT
      );
      this.fileDownloadDataSource = documents.filter(doc =>
        doc.fileType === TechnicalSupportFileType.FILE_DOWNLOAD
      );

      console.log('文件資料:', this.documentDataSource);
      console.log('檔案下載資料:', this.fileDownloadDataSource);
    });

    // 訂閱錯誤狀態
    this.error$.pipe(takeUntil(this._destroy$)).subscribe(error => {
      if (error) {
        console.error('載入技術支援資料發生錯誤:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private loadMockData(): void {
    console.log('載入技術支援 Mock 資料...');
    this._store.dispatch(TechnicalDocumentAndFileActions.loadMockTechnicalDocuments());
  }

  // 如果需要載入真實資料，可以呼叫這個方法
  private loadRealData(fileType: TechnicalSupportFileType): void {
    console.log('載入真實技術支援資料...', fileType);
    this._store.dispatch(TechnicalDocumentAndFileActions.loadTechnicalDocuments({
      payload: { fileType }
    }));
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
