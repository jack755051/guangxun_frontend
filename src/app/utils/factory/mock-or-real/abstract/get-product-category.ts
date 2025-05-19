import { Observable } from 'rxjs';
import { IProductCategoryTreeNodeViewModel } from '../../../../models/interface/feature/product-category.interface';

export abstract class GetProductCategory {
  abstract getProductCategoryTree(): Observable<IProductCategoryTreeNodeViewModel[]>;
}
