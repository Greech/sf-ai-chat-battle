import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'sf-ai-claude-password-strength',
  standalone: true,
  imports: [CardComponent,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule


  ],
  templateUrl: './claude-password-strength.component.html',
  styleUrl: './claude-password-strength.component.scss'
})
export class ClaudePasswordStrengthComponent implements OnInit {
  passwordForm!: FormGroup;
  passwordStrength: string = '';
  passwordMatch: boolean = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(10)]],
      confirmPassword: ['', Validators.required]
    });

    this.passwordForm.get('password')?.valueChanges.subscribe(() => {
      this.checkPasswordStrength();
    });

    this.passwordForm.get('confirmPassword')?.valueChanges.subscribe(() => {
      this.checkPasswordMatch();
    });
  }

  checkPasswordStrength(): void {
    const password = this.passwordForm.get('password')?.value;
    let strength = 0;

    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[$@#&!]/)) strength++;
    if (password.length >= 10) strength++;

    switch (strength) {
      case 2:
        this.passwordStrength = 'Słabe';
        break;
      case 3:
        this.passwordStrength = 'Średnie';
        break;
      case 4:
        this.passwordStrength = 'Silne';
        break;
      case 5:
        this.passwordStrength = 'Bardzo silne';
        break;
      default:
        this.passwordStrength = 'Słabe';
    }
  }

  checkPasswordMatch(): void {
    const password = this.passwordForm.get('password')?.value;
    const confirmPassword = this.passwordForm.get('confirmPassword')?.value;
    this.passwordMatch = password === confirmPassword;
  }

  onSubmit(): void {
    if (this.passwordForm.valid && this.passwordMatch) {
      this.snackBar.open('Hasło zostało pomyślnie ustawione!', 'Zamknij', {
        duration: 3000
      });
    }
  }

  getPasswordStrengthColor(): string {
    switch (this.passwordStrength) {
      case 'Słabe':
        return 'red';
      case 'Średnie':
        return 'orange';
      case 'Silne':
        return 'lightgreen';
      case 'Bardzo silne':
        return 'green';
      default:
        return 'gray';
    }
  }
}
