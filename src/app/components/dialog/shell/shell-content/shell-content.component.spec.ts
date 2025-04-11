import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellContentComponent } from './shell-content.component';

describe('ShellContentComponent', () => {
  let component: ShellContentComponent;
  let fixture: ComponentFixture<ShellContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
