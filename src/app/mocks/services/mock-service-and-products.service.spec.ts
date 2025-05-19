import { TestBed } from '@angular/core/testing';

import { MockServiceAndProductsService } from './mock-service-and-products.service';

describe('MockServiceAndProductsService', () => {
  let service: MockServiceAndProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockServiceAndProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
