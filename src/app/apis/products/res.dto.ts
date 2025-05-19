export interface IFeatureOptionResDto {
  key: string;
  name: string;
}

export interface IProductFeatureResDto {
  key: string;
  name: string;
  children: IFeatureOptionResDto[];
}

export interface IProductTypeTreeResDto {
  key: string;
  name: string;
  children: IProductFeatureResDto[];
}
