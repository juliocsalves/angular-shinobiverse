import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-jutsus',
  standalone: true,    // adiciona standalone true pra usar imports
  imports: [CommonModule],  // aqui o CommonModule para usar *ngFor e *ngIf
  templateUrl: './card-jutsus.component.html',
  styleUrls: ['./card-jutsus.component.css']
})
export class CardJutsusComponent {
  @Input()
	visible: boolean = false;
  @Input()
	jutsus: string[] = [];
}
