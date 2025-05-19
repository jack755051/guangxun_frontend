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
        id: 'camera_01',
        name: '攝影機',
        key: 'camera',
        children: [
          {
            id: 'dome_02',
            name: '半球',
            key: 'dome',
            children: [
              {
                id: 'night-vision_03',
                name: '夜視',
                key: 'night-vision',
              },
              {
                id: 'ir-cut-filter_04',
                name: '紅外線',
                key: 'ir-cut-filter',
              },
            ],
          },
          {
            id: 'bullet_05',
            name: '槍型',
            key: 'bullet',
          },
          {
            id: 'ptz_06',
            name: '雲台',
            key: 'ptz',
          },
        ],
      },
    ]);
  }
}
