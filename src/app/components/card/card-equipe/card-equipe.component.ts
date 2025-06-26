import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-equipe',
	standalone: true,
  imports: [],
  templateUrl: './card-equipe.component.html',
  styleUrl: './card-equipe.component.css'
})
export class CardEquipeComponent {

	@Input()
	shinobiEquipe:string = "";

}
