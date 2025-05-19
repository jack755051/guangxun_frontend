import { ApplicationConfig, provideZoneChangeDetection, Type } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoad } from './config/translate.config';
import { mockOrRealConfig } from './config/mock-or-real.config';
/** about real or mock setting START **/
import { registerMockableServices } from './utils/factory/mock-or-real/register-mockable/register-mockable-services';
import { ApiService as realProductCategoryApiService } from './apis/products/api.service';
import { MockServiceAndProductsService as mockServiceAndProductsService } from './mocks/services/mock-service-and-products.service';
import { MockHomePageService } from './mocks/services/mock-home-page.service';
import { HomePage } from './utils/factory/mock-or-real/abstract/home-page';
import { GetProductCategory } from './utils/factory/mock-or-real/abstract/get-product-category';
/** about real or mock setting END **/

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    TranslateModule.forRoot({
      defaultLanguage: 'zh-Hant',
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoad,
        deps: [HttpClient],
      },
    }).providers!,
    registerMockableServices(
      mockOrRealConfig.isMock,
      new Map<any, [Type<any>, Type<any>]>([
        [GetProductCategory, [realProductCategoryApiService, mockServiceAndProductsService]],
        [HomePage, [MockHomePageService, MockHomePageService]],
      ]),
    ),
  ],
};
