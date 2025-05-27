import { Component, inject, Input, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { CardComponent } from '../../../components/card/card.component';
import { ArrangeType, Cards } from '../../../components/card';
import { PaginationComponent } from '../../../components/pagination/pagination.component';
import { GetProductCategory } from '../../../utils/factory/mock-or-real/abstract/get-product-category';

@Component({
  selector: 'guangxun-products',
  imports: [SharedStandaloneImports, CardComponent, PaginationComponent],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  @Input() dataSource!: Cards; // 產品資料來源
  readonly ArrangeType = ArrangeType;

  constructor() {}

  ngOnInit(): void {}
}
