import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
@Input() sideNavStatus: boolean = false;

  list = [
  {
    number:'1',
    name:'add employee',
    icon:'fa-solid fa-users'
  },
  {
    number:'2',
    name:'add department',
    icon:'fa-solid fa-building'
  },
  {
    number:'3',
    name:' add task',
    icon:'fa-solid fa-tasks'
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
