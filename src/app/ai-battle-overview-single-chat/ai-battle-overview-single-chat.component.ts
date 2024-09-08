import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ChatGptPasswordStrengthComponent } from '../ai-battle-components/chat-gpt-password-strength/chat-gpt-password-strength.component';
import { ClaudePasswordStrengthComponent } from '../ai-battle-components/claude/claude-password-strength/claude-password-strength.component';
import { GeminiPasswordStrengthComponent } from '../ai-battle-components/gemini/gemini-password-strength/gemini-password-strength.component';

@Component({
  selector: 'sf-ai-ai-battle-overview-single-chat',
  standalone: true,
  imports: [
    MatTabsModule,
    MatCard,
    ChatGptPasswordStrengthComponent,
    ClaudePasswordStrengthComponent,
    GeminiPasswordStrengthComponent,
  ],
  templateUrl: './ai-battle-overview-single-chat.component.html',
  styleUrl: './ai-battle-overview-single-chat.component.scss'
})
export class AiBattleOverviewSingleChatComponent {

}
