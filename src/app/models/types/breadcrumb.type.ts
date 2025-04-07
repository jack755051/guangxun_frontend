import { Route } from '@angular/router';

export type Breadcrumb = {
  label: string;
  link: string;
  isClickable: boolean;
};

export interface AppRoute extends Route {
  data?: {
    breadcrumb?: Breadcrumb;
    [key: string]: any;
  };
}
