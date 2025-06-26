import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-afiliacao',
	standalone: true,
  imports: [],
  templateUrl: './card-afiliacao.component.html',
  styleUrl: './card-afiliacao.component.css'
})
export class CardAfiliacaoComponent {

	@Input()
	shinobiAfiliacao:string = "";

}
