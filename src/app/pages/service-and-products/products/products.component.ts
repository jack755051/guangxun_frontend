import { Component, inject, Input, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import {
  ArrangeType,
  CardItem,
  CardItemButton,
  CardItemTag,
  Cards,
  GuangxunCardComponent,
} from '@sanring/guangxun-card';
import { PaginationComponent } from '../../../components/pagination/pagination.component';

@Component({
  selector: 'guangxun-products',
  imports: [SharedStandaloneImports, GuangxunCardComponent, PaginationComponent],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  @Input() dataSource!: Cards; // 產品資料來源
  readonly ArrangeType = ArrangeType;

  constructor() {}

  onTagClicked(event: { card: CardItem; tag: CardItemTag }) {}
  onButtonClicked(event: { card: CardItem; button: CardItemButton }) {}

  ngOnInit(): void {}
}
