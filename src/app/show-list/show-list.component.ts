import { Component } from '@angular/core';
import { NewListComponent } from './modal/new-list/new-list.component'
//import { Modal } from 'bootstrap';
@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [NewListComponent],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss'
})
export class ShowListComponent {
  hero = 'Windstorm';
  name = "FirstList";
}
