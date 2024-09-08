import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'sf-ai-score-criterias',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    MatToolbar,
  ],
  templateUrl: './score-criterias.component.html',
  styleUrl: './score-criterias.component.scss'
})
export class ScoreCriteriasComponent {

}
