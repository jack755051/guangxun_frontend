import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { SearchBarComponent } from '../../feature/search-bar/search-bar.component';
import { MatTreeModule } from '@angular/material/tree';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductsComponent } from './products/products.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { map, Observable, take, takeUntil, Subject } from 'rxjs';
import { ArrangeType, Cards, GuangxunCardComponent } from '@sanring/guangxun-card';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateQueryService } from '../../services/updateQuery.service';
import { IQuery } from '../../models/interface/feature/service-and-products.ngrx.interface';
import { IProductCategoryTreeNodeViewModel } from '../../models/interface/feature/product-category.interface';
import { SearchState } from '../../feature/search-bar/service/search.service';
import { Store } from '@ngrx/store';
import {
  Selectors,
  selectQueryPayloadStates,
  selectServiceAndProductsResult,
} from '../../ngrx/service-and-products/selector';

@Component({
  selector: 'guangxun-service-and-products',
  standalone: true,
  imports: [
    SharedStandaloneImports,
    SearchBarComponent,
    MatTreeModule,
    SideBarComponent,
    ProductsComponent,
    GuangxunCardComponent,
    PaginationComponent,
    NgxPaginationModule,
  ],
  templateUrl: './service-and-products.component.html',
  styleUrl: './service-and-products.component.scss',
})
export class ServiceAndProductsComponent implements OnInit, OnDestroy {
  private _updateQuery = inject(UpdateQueryService);
  private _store = inject(Store);
  private _destroy$ = new Subject<void>();

  // 直接從 store 取得資料，利用現有的 selector
  serviceAndProductsData$ = this._store.select(selectServiceAndProductsResult);

  // 從主要資料流中分離出需要的部分
  dataSource$ = this.serviceAndProductsData$.pipe(
    map((data) => data.cardList)
  );

  treeData$ = this.serviceAndProductsData$.pipe(
    map((data) => data.productCategoryTree?.tree ?? [])
  );

  // 查詢狀態
  queryPayload$ = this._store.select(selectQueryPayloadStates);

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  constructor() {}
  ArrangeType = ArrangeType;
  pageIndex = 1;
  limit = 10;
  total = 100;

  // 初始化
  init() {
    //執行初始化搜索
    this._updateQuery.searchProduct();
    this._updateQuery.getNodeTree();
  }

  // 執行搜索
  onSearchTriggered(state: SearchState) {
    this._updateQuery.searchProduct();

    // 使用 takeUntil 避免記憶體洩漏
    this.queryPayload$
      .pipe(take(1), takeUntil(this._destroy$))
      .subscribe((res) => {
        console.log('執行搜索:', res);
      });
  }

  // 更新關鍵字到store
  onKeywordChange(keyword: string) {
    this.updateQuery({ keyword });
  }

  onSidebarNodeClick(node: IProductCategoryTreeNodeViewModel) {
    const query = {
      keyword: '',
      categoryId: node.id,
      tags: [],
    };
    this._updateQuery.updateQuery(query);
    this._updateQuery.searchProduct();

    // 使用已定義的 Observable 和 takeUntil
    this.queryPayload$
      .pipe(take(1), takeUntil(this._destroy$))
      .subscribe((res) => {
        console.log('執行搜索:', res);
      });
  }

  // 更新關鍵字到store
  updateQuery(query: Partial<IQuery>) {
    this._updateQuery.updateQuery(query);
  }

  setCondition() {
    this._updateQuery.setConditions(this.pageIndex, this.limit);
  }

  search() {
    this._updateQuery.searchProduct();
  }

  onPageChange(page: number) {
    this.pageIndex = page;
    this.setCondition();
    this.search(); // 觸發搜尋
  }

  onPageSizeChange(size: number) {
    this.limit = size;
    this.pageIndex = 1;
    this.setCondition();
    this.search();
  }
}
