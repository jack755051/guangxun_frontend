import { ApplicationConfig, provideZoneChangeDetection, Type } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoad } from './config/translate.config';
/** about real or mock setting START **/

import { ServiceAndProductsFeatures } from './ngrx/service-and-products/reducer';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ServiceAndProductsEffects } from './ngrx/service-and-products/effect';
/** about real or mock setting END **/

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState(ServiceAndProductsFeatures),
    provideEffects(ServiceAndProductsEffects),
    provideHttpClient(withInterceptorsFromDi()),
    TranslateModule.forRoot({
      defaultLanguage: 'zh-Hant',
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoad,
        deps: [HttpClient],
      },
    }).providers!,
  ],
};
