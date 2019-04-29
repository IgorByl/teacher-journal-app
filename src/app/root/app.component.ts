import { Component, OnInit } from "@angular/core";
import { TITLE_ROOTS } from "../common/constants";
import { Router } from "@angular/router";

import { StudentsActions } from "../redux/actions";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  public routes: string[] = TITLE_ROOTS;

  constructor(
    private router: Router,
    private action: StudentsActions,
    public translate: TranslateService
  ) {
    translate.addLangs(["en", "ru"]);
    translate.setDefaultLang("en");

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? "en" : browserLang);
  }
  public ngOnInit(): void {
    this.action.loadStudentsFromServer();
  }
}
