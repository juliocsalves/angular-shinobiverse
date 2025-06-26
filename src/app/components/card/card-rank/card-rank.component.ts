import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-rank',
	standalone: true,
  imports: [],
  templateUrl: './card-rank.component.html',
  styleUrl: './card-rank.component.css'
})
export class CardRankComponent {

	@Input()
	shinobiRank:string = "";

}
