import { Component } from '@angular/core';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { SearchBarComponent } from '../../feature/search-bar/search-bar.component';
import { MatTreeModule } from '@angular/material/tree';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'guangxun-service-and-products',
  standalone: true,
  imports: [
    SharedStandaloneImports,
    SearchBarComponent,
    MatTreeModule,
    SideBarComponent,
    ProductsComponent,
  ],
  templateUrl: './service-and-products.component.html',
  styleUrl: './service-and-products.component.scss',
})
export class ServiceAndProductsComponent {}
