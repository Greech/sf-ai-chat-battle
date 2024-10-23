import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'sf-ai-chat-gpt-password-strength',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  templateUrl: './chat-gpt-password-strength.component.html',
  styleUrl: './chat-gpt-password-strength.component.scss'
})
export class ChatGptPasswordStrengthComponent {
  password: string = '';
  confirmPassword: string = '';
  passwordStrengthValue: number = 0;
  passwordStrengthMessage: string = '';
  passwordStrengthColor: string = 'warn';
  passwordMatchMessage: string = '';
  hide: boolean = true;
  hideRepeat: boolean = true;

  evaluatePasswordStrength() {
    let strength = 0;

    const hasUpperCase = /[A-Z]/.test(this.password);
    const hasLowerCase = /[a-z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
    const isLongEnough = this.password.length >= 10;

    if (hasUpperCase) strength++;
    if (hasLowerCase) strength++;
    if (hasNumbers) strength++;
    if (hasSpecialChar) strength++;
    if (isLongEnough) strength++;

    // Ustawianie wartości siły hasła
    switch (strength) {
      case 5:
        this.passwordStrengthMessage = 'Bardzo silne';
        this.passwordStrengthValue = 100;
        this.passwordStrengthColor = 'primary';
        break;
      case 4:
        this.passwordStrengthMessage = 'Silne';
        this.passwordStrengthValue = 75;
        this.passwordStrengthColor = 'accent';
        break;
      case 3:
        this.passwordStrengthMessage = 'Średnie';
        this.passwordStrengthValue = 50;
        this.passwordStrengthColor = 'warn';
        break;
      default:
        this.passwordStrengthMessage = 'Słabe';
        this.passwordStrengthValue = 25;
        this.passwordStrengthColor = 'warn';
        break;
    }
  }

  checkPasswordMatch() {
    if (this.password === this.confirmPassword) {
      this.passwordMatchMessage = 'Hasła są zgodne';
    } else {
      this.passwordMatchMessage = 'Hasła nie są zgodne';
    }
  }
}
