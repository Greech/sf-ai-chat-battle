import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface Competitor {
  model: string;
  price: string;
  throughput: string;
  api: string;
  usage: string;
  contextLimit: string;
  npmSupport: string;
}

@Component({
  selector: 'sf-ai-compatitors-description',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
  ],
  templateUrl: './compatitors-description.component.html',
  styleUrl: './compatitors-description.component.scss'
})
export class CompatitorsDescriptionComponent {
  displayedColumns: string[] = [
    'model', 'price', 'throughput', 'api', 'usage', 'contextLimit', 'npmSupport'
  ];
  competitorData: Competitor[] = [
    {
      model: 'ChatGPT 4.0',
      price: '77,33 zł (20$)',
      throughput: '32k tokenów',
      api: 'Pełne wsparcie dla NPM, oficjalny pakiet OpenAI',
      usage: 'Generowanie tekstu, analiza, pomoc w kodowaniu',
      contextLimit: '8k-32k tokenów',
      npmSupport: 'Pełne wsparcie'
    },
    {
      model: 'Gemini Advanced 2T',
      price: '97,99 zł',
      throughput: '100k tokenów',
      api: 'Nowoczesne API do NLP, brak oficjalnego wsparcia dla NPM',
      usage: 'Predykcje tekstu, analiza języka naturalnego',
      contextLimit: '100k tokenów',
      npmSupport: 'Ograniczone, wymaga adapterów'
    },
    {
      model: 'Claude Pro',
      price: '94,80 zł (22,14 EUR)',
      throughput: '50k tokenów',
      api: 'Kompatybilne z Node.js, API REST',
      usage: 'Bezpieczeństwo, złożone analizy danych',
      contextLimit: '100k tokenów',
      npmSupport: 'Brak oficjalnego wsparcia, zewnętrzne adaptery'
    }
  ];

}
