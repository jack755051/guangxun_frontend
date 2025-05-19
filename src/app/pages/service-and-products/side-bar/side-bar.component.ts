import { Component, inject, Input, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { IProductCategoryTreeNodeViewModel } from '../../../models/interface/feature/product-category.interface';

@Component({
  selector: 'guangxun-side-bar',
  imports: [SharedStandaloneImports],
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnInit {
  category: IProductCategoryTreeNodeViewModel[] = [];

  isMock = true;

  constructor() {}

  ngOnInit(): void {}
}
