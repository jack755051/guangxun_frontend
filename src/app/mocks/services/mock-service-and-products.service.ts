import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProductCategoryTreeNodeViewModel } from '../../models/interface/feature/product-category.interface';

@Injectable({
  providedIn: 'root',
})
export class MockServiceAndProductsService {
  constructor() {}
  getProductsCategories(): Observable<IProductCategoryTreeNodeViewModel[]> {
    return of([
      {
        name: '攝影機',
        key: 'camera',
        children: [
          {
            name: '半球',
            key: 'dome',
            children: [
              {
                name: '夜視',
                key: 'night-vision',
              },
              {
                name: '紅外線',
                key: 'ir-cut-filter',
              },
            ],
          },
          {
            name: '槍型',
            key: 'bullet',
          },
          {
            name: '雲台',
            key: 'ptz',
          },
        ],
      },
    ]);
  }
}
