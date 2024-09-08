import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { ChatGptPasswordStrengthComponent } from '../ai-battle-components/chat-gpt-password-strength/chat-gpt-password-strength.component';
import { ClaudePasswordStrengthComponent } from '../ai-battle-components/claude/claude-password-strength/claude-password-strength.component';
import { GeminiPasswordStrengthComponent } from '../ai-battle-components/gemini/gemini-password-strength/gemini-password-strength.component';

@Component({
  selector: 'sf-ai-ai-battle-overview',
  standalone: true,
  imports: [
    ChatGptPasswordStrengthComponent,
    ClaudePasswordStrengthComponent,
    GeminiPasswordStrengthComponent,
    MatCard
  ],
  templateUrl: './ai-battle-overview.component.html',
  styleUrl: './ai-battle-overview.component.scss'
})
export class AiBattleOverviewComponent {

}
