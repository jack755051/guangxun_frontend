import { Observable } from 'rxjs';
import { IProductCategoryTreeNodeViewModel } from '../../../../models/interface/feature/product-category.interface';
import { Cards } from '@sanring/guangxun-card';

export abstract class GetProductCategory {
  abstract getProductCategoryTree(): Observable<IProductCategoryTreeNodeViewModel[]>;
  abstract getProductCategoryCards(): Observable<Cards>;
}
