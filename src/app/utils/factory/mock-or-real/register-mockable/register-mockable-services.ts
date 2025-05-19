import { Provider, Type, inject } from '@angular/core';

export function registerMockableServices(
  isMock: boolean,
  serviceMap: Map<any, [Type<any>, Type<any>]>,
): Provider[] {
  return Array.from(serviceMap.entries()).flatMap(([token, [real, mock]]) => [
    real,
    mock,
    {
      provide: token,
      useFactory: () => inject(isMock ? mock : real),
    },
  ]);
}
