import { Component } from '@angular/core';
import { NewListComponent } from './modal/new-list/new-list.component'
import { CommonModule } from '@angular/common';

//import { Modal } from 'bootstrap';
@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [NewListComponent, CommonModule],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss'
})
export class ShowListComponent {
  lists = [
    {
      id: 1, 
      name: 'Shopping List',
      tasks: [
        { id: 1, task: 'Buy Milk', done: false },
        { id: 2, task: 'Buy Eggs', done: true },
        { id: 3, task: 'Buy Bread', done: false }
      ]
    },
    {
      id: 2,
      name: 'Work Tasks',
      tasks: [
        { id: 1, task: 'Complete Report', done: true },
        { id: 2, task: 'Attend Meeting', done: false },
        { id: 3, task: 'Fix Bugs', done: false }
      ]
    },
    {
      id: 3,
      name: 'Personal Tasks',
      tasks: [
        { id: 1, task: 'Call Mom', done: false },
        { id: 2, task: 'Walk the Dog', done: true },
        { id: 3, task: 'Cook Dinner', done: false }
      ]
    }
  ];
}
