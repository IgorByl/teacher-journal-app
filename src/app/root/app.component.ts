import { Component } from "@angular/core";
import { TITLE_ROOTS } from "../common/constants";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  public title: string = "Teacher journal";
  public routs: Array<string> = TITLE_ROOTS;
}
