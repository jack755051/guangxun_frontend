import { IProductCategoryTreeNodeViewModel } from '../../models/interface/feature/product-category.interface';
import { IProductCardsViewModel } from '../../models/interface/feature/service-and-products.ngrx.interface';
import { ArrangeType } from '../../components/card';

export class ProductsMapper {
  /**
   * 公开的静态方法，用于将产品类别数据转换为视图模型
   * @param data 产品类别数据或数据数组
   * @returns 转换后的视图模型或视图模型数组
   */
  public static ProductsCategoryTreeToViewModel(
    data: any,
  ): IProductCategoryTreeNodeViewModel | IProductCategoryTreeNodeViewModel[] {
    if (Array.isArray(data)) {
      return data.map((item) => this.mapProductsCategoryTreeToViewModel(item));
    }
    return this.mapProductsCategoryTreeToViewModel(data);
  }
  /**
   * 将产品类别数据转换为视图模型
   * @param productCategory 产品类别数据
   * @returns 转换后的视图模型
   */
  private static mapProductsCategoryTreeToViewModel(
    productCategory: any,
  ): IProductCategoryTreeNodeViewModel {
    return {
      id: productCategory.id,
      name: productCategory.name,
      key: productCategory.key,
      children: productCategory.children
        ? productCategory.children.map((child: any) =>
            this.mapProductsCategoryTreeToViewModel(child),
          )
        : [],
    };
  }

  /**
   * 公开的静态方法，用于将产品类别数据转换为卡片格式
   * @param data 产品类别数据或数据数组
   * @returns 转换后的卡片格式
   */
  public static ProductsCardsToViewModel(data: any): IProductCardsViewModel {
    return this.mapProductsCardsViewModel(data);
  }

  /**
   * 将产品类别数据转换为卡片格式
   * @param data 产品类别数据或数据数组
   * @returns 转换后的卡片格式
   */
  private static mapProductsCardsViewModel(res: any): IProductCardsViewModel {
    return {
      arrangeType: res.arrangeType as ArrangeType,
      card: res.cards.map((card: any) => ({
        id: card.id,
        name: card.name,
        description: card.description,
        imageUrl: card.imageUrl,
        link: card.link,
      })),
    };
  }
}
