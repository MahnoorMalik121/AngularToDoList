import { Component } from '@angular/core';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss'
})
export class ShowListComponent {
  hero = 'Windstorm';
}
