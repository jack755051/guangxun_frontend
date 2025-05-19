import { IServiceAndProductsState } from '../../models/interface/feature/service-and-products.ngrx.interface';

const initialState: IServiceAndProductsState = {
  query: {
    limit: 10,
    page: 1,
    keyword: '',
  },
};
