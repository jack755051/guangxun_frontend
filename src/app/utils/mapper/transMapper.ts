import { PaginationParams } from '../../models/interface/feature/common.interface';

export class TransMapper {
  static pageViewMoelToDTO(
    /** 當前索引*/
    pageIndex: number,
    /** 每頁筆數 */
    limit: number,
  ): PaginationParams {
    return {
      skip: (pageIndex - 1) * limit,
      limit: limit,
    };
  }
}
