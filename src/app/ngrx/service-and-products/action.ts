import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ITechnicalCategoryResponse } from '../../apis/technical-support/res.dto';
import {
  IQuery,
  IQueryPayload,
} from '../../models/interface/feature/service-and-products.ngrx.interface';

export const ServiceAndProductsActions = createActionGroup({
  source: 'service-and-products',
  events: {
    'Load Service And Products': emptyProps(),
    'Load Service And Products Loading': emptyProps(),
    'Load Service And Products Success': props<{
      serviceAndProducts: ITechnicalCategoryResponse;
    }>(),
    'Load Service And Products Failure': props<{ error: any }>(),
    'Update Query': props<{
      query: Partial<IQuery>;
      skip?: number;
      limit?: number;
    }>(),

    'Load Product Category Tree': emptyProps(),
    'Load Product Category Tree Loading': emptyProps(),
    'Load Product Category Tree Success': props<{
      productCategoryTree: ITechnicalCategoryResponse;
    }>(),
    'Load Product Category Tree Failure': props<{ error: any }>(),
  },
});
