import { Component } from "@angular/core";

@Component({
  selector: "app-not-found",
  template: `
    <h2>Page don\'t found!</h2>
    <h4>
      Do you want to visit <a routerLink="/students">{{rout}}</a> ?
    </h4>
  `,
})
export class NotFoundComponent {
  public rout: string = "Teacher Journal";
}
