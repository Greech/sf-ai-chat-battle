import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CardComponent } from '../shared/card/card.component';
import { MatDivider } from '@angular/material/divider';

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
    CardComponent,
    MatDivider
  ],
  templateUrl: './compatitors-description.component.html',
  styleUrl: './compatitors-description.component.scss'
})
export class CompatitorsDescriptionComponent {}
