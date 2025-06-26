import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImageComponent } from './card-image/card-image.component';
import { CardNameComponent } from './card-name/card-name.component';
import { CardAfiliacaoComponent } from './card-afiliacao/card-afiliacao.component';
import { CardEquipeComponent } from './card-equipe/card-equipe.component';
import { CardClaComponent } from './card-cla/card-cla.component';
import { CardRankComponent } from './card-rank/card-rank.component';
import { CardJutsusComponent } from './card-jutsus/card-jutsus.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    CardImageComponent,
    CardNameComponent,
    CardAfiliacaoComponent,
    CardEquipeComponent,
    CardClaComponent,
    CardRankComponent,
    CardJutsusComponent
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() shinobiName: string = 'Desconhecido';
  @Input() shinobiAfiliacao: string = 'Filiação desconhecida';
  @Input() shinobiEquipe: string = 'Sem equipe';
  @Input() shinobiCla: string = 'Sem clã';
  @Input() shinobiRank: string = 'Sem rank';
  @Input() shinobiImg: string = 'Sem imagem disponível';
  @Input() jutsus!: string[];

  showJutsus = false;

  toggleJutsus() {
    this.showJutsus = !this.showJutsus;
  }
}
