import { ProductType as ProductTypeEnum } from '../../enum/product.enum';

export interface ProductType {
  label: string;
  type: ProductTypeEnum;
}

export interface Product {
  type: ProductType;
  label: string;
}
