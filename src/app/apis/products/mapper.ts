import { IProductCategoryTreeNodeViewModel } from '../../models/interface/feature/product-category.interface';

export class ProductsMapper {
  /**
   * 公开的静态方法，用于将产品类别数据转换为视图模型
   * @param data 产品类别数据或数据数组
   * @returns 转换后的视图模型或视图模型数组
   */
  public static ProductsCategoryToViewModel(
    data: any,
  ): IProductCategoryTreeNodeViewModel | IProductCategoryTreeNodeViewModel[] {
    if (Array.isArray(data)) {
      return data.map((item) => this.mapProductsCategoryToViewModel(item));
    }
    return this.mapProductsCategoryToViewModel(data);
  }
  /**
   * 将产品类别数据转换为视图模型
   * @param productCategory 产品类别数据
   * @returns 转换后的视图模型
   */
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
