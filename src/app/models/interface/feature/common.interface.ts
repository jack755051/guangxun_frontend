// 共通分頁參數介面
export type PaginationParams = {
  /** 分頁資料 offset 筆數
   * * default: 0
   * */
  skip: number;
  /** 每頁資料筆數
   * * default: 10
   * */
  limit: number;
};
