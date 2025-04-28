import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDocumentComponent } from './technical-document.component';

describe('TechnicalDocumentComponent', () => {
  let component: TechnicalDocumentComponent;
  let fixture: ComponentFixture<TechnicalDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalDocumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicalDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
