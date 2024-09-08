import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'sf-ai-claude-password-strength',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './claude-password-strength.component.html',
  styleUrl: './claude-password-strength.component.scss'
})
export class ClaudePasswordStrengthComponent {

}
