import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProductCategoryTreeNodeViewModel } from '../../models/interface/feature/product-category.interface';
import { GetProductCategory } from '../../utils/factory/mock-or-real/abstract/get-product-category';
import { ArrangeType, Cards } from '../../components/card';

@Injectable({
  providedIn: 'root',
})
export class MockServiceAndProductsService implements GetProductCategory {
  constructor() {}

  /**
   * Mock data for product category tree
   * @returns Observable<IProductCategoryTreeNodeViewModel[]>
   */
  getProductCategoryTree(): Observable<IProductCategoryTreeNodeViewModel[]> {
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
                children: [],
              },
              {
                id: 'ir-cut-filter_04',
                name: '紅外線',
                key: 'ir-cut-filter',
                children: [],
              },
            ],
          },
          {
            id: 'bullet_05',
            name: '槍型',
            key: 'bullet',
            children: [
              {
                id: 'night-vision_03',
                name: '夜視',
                key: 'night-vision',
                children: [],
              },
              {
                id: 'ir-cut-filter_04',
                name: '紅外線',
                key: 'ir-cut-filter',
                children: [],
              },
            ],
          },
          {
            id: 'ptz_06',
            name: '雲台',
            key: 'ptz',
            children: [
              {
                id: 'night-vision_03',
                name: '夜視',
                key: 'night-vision',
                children: [],
              },
              {
                id: 'ir-cut-filter_04',
                name: '紅外線',
                key: 'ir-cut-filter',
                children: [],
              },
            ],
          },
        ],
      },
    ]);
  }

  getProductCategoryCards(): Observable<Cards> {
    const cards: Cards = {
      arrangeType: ArrangeType.LIST,
      card: Array.from({ length: 20 }, (_, i) => {
        const index = i + 1;
        return {
          header: {
            avatar: {
              icon: 'faFire',
              color: 'red',
            },
            title: `Product ${index}`,
          },
          content: {
            image: 'assets/images/mock/mock_product.jpeg',
            title: `Title ${index}`,
            subTitle: `Subtitle ${index}`,
            description: `Description ${index}`,
            tag: [
              { label: `tag${index}-1`, action: () => {} },
              { label: `tag${index}-2`, action: () => {} },
              { label: `tag${index}-3`, action: () => {} },
            ],
          },
          footer: {
            button: [
              {
                label: `Button ${index}-1`,
                action: () => {},
              },
              ...(index % 2 === 0
                ? [
                    {
                      label: `Button ${index}-2`,
                      action: () => {},
                    },
                  ]
                : []),
            ],
          },
        };
      }),
    };

    return of(cards);
  }
}
