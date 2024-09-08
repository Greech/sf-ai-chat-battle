import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeminiPasswordStrengthComponent } from './gemini-password-strength.component';

describe('GeminiPasswordStrengthComponent', () => {
  let component: GeminiPasswordStrengthComponent;
  let fixture: ComponentFixture<GeminiPasswordStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeminiPasswordStrengthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeminiPasswordStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
