import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-cla',
	standalone: true,
  imports: [],
  templateUrl: './card-cla.component.html',
  styleUrl: './card-cla.component.css'
})
export class CardClaComponent {

	@Input()
	shinobiCla:string = "";

}
