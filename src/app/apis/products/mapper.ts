import { IProductCategoryTreeNodeViewModel } from '../../models/interface/feature/product-category.interface';

export class ProductsMapper {
  public static toViewModel(
    data: any,
  ): IProductCategoryTreeNodeViewModel | IProductCategoryTreeNodeViewModel[] {
    if (Array.isArray(data)) {
      return data.map((item) => this.mapProductsCategoryToViewModel(item));
    }
    return this.mapProductsCategoryToViewModel(data);
  }
  private static mapProductsCategoryToViewModel(
    productCategory: any,
  ): IProductCategoryTreeNodeViewModel {
    return {
      id: productCategory.id,
      name: productCategory.name,
      key: productCategory.key,
      children: productCategory.children
        ? productCategory.children.map((child: any) => this.mapProductsCategoryToViewModel(child))
        : [],
    };
  }
}
