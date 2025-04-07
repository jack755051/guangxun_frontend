import { Routes } from '@angular/router';
import {
  HomeComponent,
  AboutComponent,
  ContactComponent,
  TechnicalSupportComponent,
  ServiceAndProductsComponent,
  NewsComponent,
} from './pages';
import { Breadcrumb } from './models/types/breadcrumb.type';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: { label: 'ROUTES.HOME', link: '/home', isClickable: false } as Breadcrumb },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      breadcrumb: { label: 'ROUTES.ABOUT', link: '/about', isClickable: true } as Breadcrumb,
    },
  },
  {
    path: 'service-and-products',
    component: ServiceAndProductsComponent,
    data: {
      breadcrumb: {
        label: 'ROUTES.SERVICE_AND_PRODUCTS',
        link: '/service-and-products',
        isClickable: true,
      } as Breadcrumb,
    },
  },
  {
    path: 'news',
    component: NewsComponent,
    data: { breadcrumb: { label: 'ROUTES.NEWS', link: '/news', isClickable: true } as Breadcrumb },
  },
  {
    path: 'technical-support',
    component: TechnicalSupportComponent,
    data: {
      breadcrumb: {
        label: 'ROUTES.TECHNICAL_SUPPORT',
        link: '/technical-support',
        isClickable: true,
      } as Breadcrumb,
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      breadcrumb: { label: 'ROUTES.CONTACT', link: '/contact', isClickable: true } as Breadcrumb,
    },
  },
];
