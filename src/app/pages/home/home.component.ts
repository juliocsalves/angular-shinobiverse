import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CardComponent } from '../../components/card/card.component';
import { ShinobiService, Shinobi } from '../../services/shinobi.service';
import { CardAudioComponent } from "../../components/card/card-audio/card-audio.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, CardAudioComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  shinobisOriginal: Shinobi[] = [];
  shinobis$: Observable<Shinobi[]>;
  quantidade = 12;
  mostrandoTudo = false;
  desaparecendo: number[] = [];

  constructor(private shinobiService: ShinobiService) {
    this.shinobis$ = this.shinobiService.getShinobis().pipe(
      tap((dados) => {
        this.shinobisOriginal = dados;
      }),
      map((dados) => dados.slice(0, this.quantidade))
    );
  }

  carregarMais() {
    if (!this.mostrandoTudo) {
      this.quantidade = this.shinobisOriginal.length;
      this.mostrandoTudo = true;
      this.shinobis$ = of(this.shinobisOriginal.slice(0, this.quantidade));
    } else {
      // Índices que vão desaparecer (os últimos)
      const inicio = this.quantidade - 12;
      this.desaparecendo = Array.from({ length: 12 }, (_, i) => inicio + i);

      // Espera a animação rodar antes de cortar do DOM
      setTimeout(() => {
        this.quantidade = 12;
        this.mostrandoTudo = false;
        this.shinobis$ = of(this.shinobisOriginal.slice(0, this.quantidade));
        this.desaparecendo = [];
      }, 500); // tempo da animação no CSS
    }
  }

  get mostrarBotao(): boolean {
    return this.shinobisOriginal.length > 12;
  }

  get textoBotao(): string {
    return this.mostrandoTudo
      ? 'Visualizar Menos Personagens'
      : 'Visualizar Mais Personagens';
  }
}
