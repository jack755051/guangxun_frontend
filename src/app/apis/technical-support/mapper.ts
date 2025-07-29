import { TechnicalSupportFileType } from '../../models/enum/technical.enum';
import { IProductCategoryTreeNodeViewModel } from '../../models/interface/feature/product-category.interface';
import { ITechnicalSupportFileViewModel } from '../../models/interface/feature/technical-support.interface';

export class TechnicalSupportMapper {
  /**
   * 公开的静态方法，用于将技术支持数据转换为视图模型
   * @param data 技术支持数据或数据数组
   * @returns 转换后的视图模型或视图模型数组
   */
  public static toViewModel(
    data: any,
  ): ITechnicalSupportFileViewModel[] {
    // 如果 data 是陣列，使用 map 處理每個元素
    if (Array.isArray(data)) {
      return data.map(item => this.mapTechnicalSupportToViewModel(item));
    }
    // 如果 data 是單一物件，包裝成陣列
    return [this.mapTechnicalSupportToViewModel(data)];
  }

  /**
   * 将技术支持数据转换为视图模型
   * @param technicalSupport 技术支持数据
   * @returns 转换后的视图模型
   */
  private static mapTechnicalSupportToViewModel(
    technicalSupport: any,
  ): ITechnicalSupportFileViewModel {
    return {
      id: technicalSupport.id,
      fileType: technicalSupport.fileType as TechnicalSupportFileType,
      fileName: technicalSupport.fileName,
      fileSize: technicalSupport.fileSize,
      fileUrl: technicalSupport.fileUrl,
      updatedAt: new Date(technicalSupport.updatedAt),
    };
  }
}

