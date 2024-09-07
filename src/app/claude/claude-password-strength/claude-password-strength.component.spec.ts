import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaudePasswordStrengthComponent } from './claude-password-strength.component';

describe('ClaudePasswordStrengthComponent', () => {
  let component: ClaudePasswordStrengthComponent;
  let fixture: ComponentFixture<ClaudePasswordStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaudePasswordStrengthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaudePasswordStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
