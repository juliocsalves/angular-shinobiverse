import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-audio-dica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-audio-dica.component.html',
  styleUrls: ['./card-audio-dica.component.css'],
})
export class CardAudioDicaComponent {
  @Output()
	clicado = new EventEmitter<void>();

  emitirClique() {
    this.clicado.emit();
  }
}
