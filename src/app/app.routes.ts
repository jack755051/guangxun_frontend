import { Routes } from '@angular/router';
import { HomeComponent, AboutComponent, ContactComponent, TechnicalSupportComponent, ServiceAndProductsComponent, NewsComponent } from './pages';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service-and-products', component: ServiceAndProductsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'technical-support', component: TechnicalSupportComponent },
  { path: 'contact', component: ContactComponent },
];
