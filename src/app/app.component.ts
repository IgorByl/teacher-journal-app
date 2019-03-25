import { Component } from '@angular/core';
import { titleRouts } from './titleRouts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'Teacher journal';
  routs: Array<string> = titleRouts;
}
