import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAndProductsComponent } from './service-and-products.component';

describe('ServiceAndProductsComponent', () => {
  let component: ServiceAndProductsComponent;
  let fixture: ComponentFixture<ServiceAndProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceAndProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceAndProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
