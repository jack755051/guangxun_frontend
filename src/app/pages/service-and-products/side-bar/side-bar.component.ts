import { Component, inject, Input, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { ProductsCategoryService } from '../../../services/products-category.service';
import { IProductCategoryTreeNodeViewModel } from '../../../models/interface/feature/product-category.interface';
import { ProductMapper } from '../../../apis/products/product.mapper';

@Component({
  selector: 'guangxun-side-bar',
  imports: [SharedStandaloneImports],
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnInit {
  private _productsCategoryService = inject(ProductsCategoryService);
  category: IProductCategoryTreeNodeViewModel[] = [];

  isMock = true;

  constructor() {}

  ngOnInit(): void {
    if (this.isMock) {
      this.getMockProductsCategories();
    } else {
      this.getProductsCategories();
    }
  }

  // get products categories
  getProductsCategories() {
    this._productsCategoryService.getProductsCategories().subscribe((res) => {});
  }

  // TODO: 測試用 MOCK 資料，後續移除
  getMockProductsCategories() {
    this._productsCategoryService.getMockProductsCategories().subscribe((res) => {
      console.log(res);

      this.category = res;
    });
  }
}
