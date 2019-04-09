import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-not-found",
  template: `
    <h2>Page don\'t found!</h2>
    <h4>
      Do you want to visit <a routerLink="/students">Teacher Journal</a> ?
    </h4>
  `,
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {
  }
}
