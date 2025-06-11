import { Component, inject, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { SearchBarComponent } from '../../feature/search-bar/search-bar.component';
import { MatTreeModule } from '@angular/material/tree';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from '../../components/card/card.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { ArrangeType, Cards } from '../../components/card';
import { GetProductCategory } from '../../utils/factory/mock-or-real/abstract/get-product-category';
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
    CardComponent,
    PaginationComponent,
    NgxPaginationModule,
  ],
  templateUrl: './service-and-products.component.html',
  styleUrl: './service-and-products.component.scss',
})
export class ServiceAndProductsComponent implements OnInit {
  private _updateQuery = inject(UpdateQueryService);
  private _store = inject(Store);
  private readonly _getProductCategory = inject(GetProductCategory);
  private _dataSource = new BehaviorSubject<Cards>({
    card: [],
    arrangeType: ArrangeType.LIST,
  });

  dataSource$: Observable<Cards> = this._dataSource.asObservable();
  treeData$: Observable<IProductCategoryTreeNodeViewModel[]> = this._store
    .select(selectServiceAndProductsResult)
    .pipe(map((res) => res.productCategoryTree?.tree ?? []));

  ngOnInit() {
    this.init();
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

    // 取得回傳資料
    this._store.select(selectServiceAndProductsResult).subscribe((res) => {
      this._dataSource.next(res.cardList);
    });
    // 取得 node tree
    this.treeData$ = this._store
      .select(selectServiceAndProductsResult)
      .pipe(map((res) => res.productCategoryTree?.tree ?? []));
  }

  // 執行搜索
  onSearchTriggered(state: SearchState) {
    this._updateQuery.searchProduct();
    this._store
      .select(selectQueryPayloadStates)
      .pipe(take(1))
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
    this._store
      .select(selectQueryPayloadStates)
      .pipe(take(1))
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
