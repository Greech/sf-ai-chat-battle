import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'sf-ai-gemini-password-strength',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './gemini-password-strength.component.html',
  styleUrl: './gemini-password-strength.component.scss'
})
export class GeminiPasswordStrengthComponent {}
