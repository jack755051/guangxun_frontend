import { TestBed } from '@angular/core/testing';

import { MockHomePageService } from './mock-home-page.service';

describe('MockHomePageService', () => {
  let service: MockHomePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockHomePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
