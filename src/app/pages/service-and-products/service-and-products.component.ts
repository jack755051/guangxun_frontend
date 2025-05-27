import { Component, inject, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { SearchBarComponent } from '../../feature/search-bar/search-bar.component';
import { MatTreeModule } from '@angular/material/tree';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from '../../components/card/card.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { ArrangeType, Cards } from '../../components/card';
import { GetProductCategory } from '../../utils/factory/mock-or-real/abstract/get-product-category';
import { NgxPaginationModule } from 'ngx-pagination';

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
  private readonly _getProductCategory = inject(GetProductCategory);
  private _dataSource = new BehaviorSubject<Cards>({
    card: [],
    arrangeType: ArrangeType.LIST,
  });

  dataSource$: Observable<Cards> = this._dataSource.asObservable();

  ngOnInit() {
    this._getProductCategory.getProductCategoryCards().subscribe((res) => {
      this._dataSource.next(res); // ✅ 更新資料來源
    });
  }

  constructor() {}
  ArrangeType = ArrangeType;
  pageIndex = 1;
  limit = 10;
  total = 100;

  setCondition() {}

  onPageChange(page: number) {
    this.pageIndex = page;
    this.setCondition(); // 對應 API reload
  }

  onPageSizeChange(size: number) {
    this.limit = size;
    this.pageIndex = 1;
    this.setCondition(); // 同上
  }
}
