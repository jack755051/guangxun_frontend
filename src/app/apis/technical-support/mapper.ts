import { IProductCategoryTreeNodeViewModel } from '../../models/interface/feature/product-category.interface';

export class TechnicalSupportMapper {
  /**
   * 公开的静态方法，用于将技术支持数据转换为视图模型
   * @param data 技术支持数据或数据数组
   * @returns 转换后的视图模型或视图模型数组
   */
  public static toViewModel(
    data: any,
  ): IProductCategoryTreeNodeViewModel | IProductCategoryTreeNodeViewModel[] {
    if (Array.isArray(data)) {
      return data.map((item) => this.mapTechnicalSupportToViewModel(item));
    }
    return this.mapTechnicalSupportToViewModel(data);
  }

  private static mapTechnicalSupportToViewModel(
    productCategory: any,
  ): IProductCategoryTreeNodeViewModel {
    return {
      id: productCategory.id,
      name: productCategory.name,
      key: productCategory.key,
      children: productCategory.children
        ? productCategory.children.map((child: any) => this.mapTechnicalSupportToViewModel(child))
        : [],
    };
  }
}
