import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGptPasswordStrengthComponent } from './chat-gpt-password-strength.component';

describe('ChatGptPasswordStrengthComponent', () => {
  let component: ChatGptPasswordStrengthComponent;
  let fixture: ComponentFixture<ChatGptPasswordStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatGptPasswordStrengthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatGptPasswordStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
