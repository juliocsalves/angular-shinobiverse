import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-name',
  standalone: true,
  imports: [],
  templateUrl: './card-name.component.html',
  styleUrls: ['./card-name.component.css']
})
export class CardNameComponent {
  @Input()
  shinobiName: string = '';
}
