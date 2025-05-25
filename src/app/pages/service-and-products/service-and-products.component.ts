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
      // // 假設這裡將 res 轉換為 Cards 格式
      // const cards: Cards = {
      //   card: res.map((item) => ({
      //     id: item.id,
      //     title: item.name,
      //     description: '',
      //     imageUrl: '', // 假設有圖片 URL
      //     link: '', // 假設有連結
      //   })),
      //   arrangeType: ArrangeType.LIST, // 初始排列方式
      // };
      console.log('Product Category:', res);
      // this._dataSource.next(cards);
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
