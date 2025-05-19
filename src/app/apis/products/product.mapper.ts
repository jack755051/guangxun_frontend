import { IProductCategoryTreeNodeViewModel } from '../../models/interface/feature/product-category.interface';
import { IProductTypeTreeResDto } from './products.res.dto';

export class ProductMapper {
  static mapToTreeViewModel(dto: IProductTypeTreeResDto[]): IProductCategoryTreeNodeViewModel[] {
    return dto.map((type) => ({
      key: type.key,
      name: type.name,
      children: type.children.map((feature) => ({
        key: feature.key,
        name: feature.name,
        children: feature.children.map((option) => ({
          key: option.key,
          name: option.name,
        })),
      })),
    }));
  }
}
