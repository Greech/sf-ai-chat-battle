import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'sf-ai-score',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatLabel,
    MatFormField,
    NgFor,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    CardComponent,
  ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss',
})
export class ScoreComponent implements OnInit {
  previousTotal = 0;

  chatGPTScores = {
    understanding: 0,
    codeQuality: 0,
    complexity: 0,
    elasticity: 0,
    uxui: 0,
    practice: 0,
  };

  geminiScores = {
    understanding: 0,
    codeQuality: 0,
    complexity: 0,
    elasticity: 0,
    uxui: 0,
    practice: 0,
  };

  claudeScores = {
    understanding: 0,
    codeQuality: 0,
    complexity: 0,
    elasticity: 0,
    uxui: 0,
    practice: 0,
  };

  constructor() {}

  ngOnInit(): void {
    this.loadScores();
  }

  saveScores(chatbot: string, scores: any): void {
    localStorage.setItem(`${chatbot}Scores`, JSON.stringify(scores));
  }

  loadScores(): void {
    const savedChatGPT = localStorage.getItem('chatGPTScores');
    const savedGemini = localStorage.getItem('geminiScores');
    const savedClaude = localStorage.getItem('claudeScores');

    if (savedChatGPT) {
      this.chatGPTScores = JSON.parse(savedChatGPT);
    }

    if (savedGemini) {
      this.geminiScores = JSON.parse(savedGemini);
    }

    if (savedClaude) {
      this.claudeScores = JSON.parse(savedClaude);
    }
  }

  calculateTotal(scores: any): any {
    return Object.values(scores).reduce((acc, curr) => (acc as any) + Number(curr), 0);
  }

  sortedScores(): any[] {
    const results = [
      { name: 'ChatGPT', total: this.calculateTotal(this.chatGPTScores) },
      { name: 'Gemini', total: this.calculateTotal(this.geminiScores) },
      { name: 'Claude', total: this.calculateTotal(this.claudeScores) }
    ];

    return results.sort((a, b) => b.total - a.total);
  }

  hasTotalChanged(): boolean {
    const currentTotal = this.sortedScores().reduce((acc, item) => acc + item.total, 0);
    const changed = currentTotal !== this.previousTotal;
    this.previousTotal = currentTotal; // Aktualizacja poprzedniego wyniku
    return changed;
  }
}
