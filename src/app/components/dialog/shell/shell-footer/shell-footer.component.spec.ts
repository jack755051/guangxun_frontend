import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellFooterComponent } from './shell-footer.component';

describe('ShellFooterComponent', () => {
  let component: ShellFooterComponent;
  let fixture: ComponentFixture<ShellFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
