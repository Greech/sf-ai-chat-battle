import { Routes } from '@angular/router';
import { ChatGptPasswordStrengthComponent } from './chat-gpt/chat-gpt-password-strength/chat-gpt-password-strength.component';
import { ClaudePasswordStrengthComponent } from './claude/claude-password-strength/claude-password-strength.component';
import { GeminiPasswordStrengthComponent } from './gemini/gemini-password-strength/gemini-password-strength.component';
import { OverviewComponent } from './views/overview/overview.component';

export const routes: Routes = [
    { path: 'overview', component: OverviewComponent },
    { path: 'chat-gpt', component: ChatGptPasswordStrengthComponent },
    { path: 'gemini', component: GeminiPasswordStrengthComponent },
    { path: 'claude', component: ClaudePasswordStrengthComponent },
    { path: '', redirectTo: '/overview', pathMatch: 'full' }    
];