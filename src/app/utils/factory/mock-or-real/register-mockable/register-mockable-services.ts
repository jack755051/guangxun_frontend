import { Provider, Type, inject } from '@angular/core';

export function registerMockableServices(
  isMock: boolean,
  serviceMap: Record<any, [Type<any>, Type<any>]>,
): Provider[] {
  return Object.entries(serviceMap).flatMap(([token, [real, mock]]) => [
    real,
    mock,
    {
      provide: token,
      useFactory: () => inject(isMock ? mock : real),
    },
  ]);
}
