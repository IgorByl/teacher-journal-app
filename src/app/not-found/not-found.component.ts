import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<h3>404: Page not found.</h3>`,
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
