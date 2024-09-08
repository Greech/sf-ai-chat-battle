import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'sf-ai-chat-gpt-password-strength',
  standalone: true,
  imports: [CardComponent, MatIcon],
  templateUrl: './chat-gpt-password-strength.component.html',
  styleUrl: './chat-gpt-password-strength.component.scss'
})
export class ChatGptPasswordStrengthComponent {}
