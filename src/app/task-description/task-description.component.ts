import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTab, MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'sf-ai-task-description',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbar,
    MatTabsModule
  ],
  templateUrl: './task-description.component.html',
  styleUrl: './task-description.component.scss'
})
export class TaskDescriptionComponent {}
