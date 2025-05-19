export interface IProductCategoryTreeNodeViewModel {
  id: string;
  name: string;
  key: string;
  children?: IProductCategoryTreeNodeViewModel[];
}
