import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { ChatGptPasswordStrengthComponent } from '../chat-gpt/chat-gpt-password-strength/chat-gpt-password-strength.component';
import { ClaudePasswordStrengthComponent } from '../claude/claude-password-strength/claude-password-strength.component';
import { GeminiPasswordStrengthComponent } from '../gemini/gemini-password-strength/gemini-password-strength.component';

@Component({
  selector: 'sf-ai-overview',
  standalone: true,
  imports: [
    ChatGptPasswordStrengthComponent,
    ClaudePasswordStrengthComponent,
    GeminiPasswordStrengthComponent,
    MatCard
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
