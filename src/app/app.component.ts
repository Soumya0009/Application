import { Component } from '@angular/core';

@Component({
  selector: 'document',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  sideNavStatus: boolean = false;
}
