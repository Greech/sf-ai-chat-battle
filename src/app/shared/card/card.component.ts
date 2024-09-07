import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'sf-ai-card',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    NgIf
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() iconName: string = '';
}
