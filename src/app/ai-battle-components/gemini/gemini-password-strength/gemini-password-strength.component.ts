import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'sf-ai-gemini-password-strength',
  standalone: true,
  imports: [CardComponent, CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './gemini-password-strength.component.html',
  styleUrl: './gemini-password-strength.component.scss'
})
export class GeminiPasswordStrengthComponent {
  passwordForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
    ]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  get passwordStrength() {
    const password = this.passwordForm.get('password')?.value;
    if (!password) return 'Słabe';

    const requirementsMet = [
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /\d/.test(password),
      /[@$!%*?&]/.test(password)
    ].filter(Boolean).length;

    if (requirementsMet === 2) return 'Słabe';
    if (requirementsMet === 3) return 'Średnie';
    if (requirementsMet === 4) return 'Silne';
    return 'Bardzo silne';
  }

  get passwordsMatch() {
    return this.passwordForm.get('password')?.value === this.passwordForm.get('confirmPassword')?.value;
  }
}
