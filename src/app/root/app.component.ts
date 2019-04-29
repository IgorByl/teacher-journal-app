import { Component, OnInit, OnDestroy } from "@angular/core";
import { TITLE_ROOTS } from "../common/constants";
import { Router } from "@angular/router";

import { StudentsActions } from "../redux/actions";
import { TranslateService } from "@ngx-translate/core";
import { select } from "@angular-redux/store";
import { Observable, Subscription } from "rxjs";
import { IStudent, PopUpItem } from "../common/entities";
import { PopUpService } from "../common/services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit, OnDestroy {
  public routes: string[] = TITLE_ROOTS;

  @select(state => state.studentsReducer)
  public readonly students$: Observable<IStudent[]>;
  public popUpInfo: PopUpItem;
  public sub: Subscription;

  constructor(
    private router: Router,
    private action: StudentsActions,
    private popUpService: PopUpService,
    public translate: TranslateService
  ) {
    translate.addLangs(["en", "ru"]);
    translate.setDefaultLang("en");

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? "en" : browserLang);
  }
  public ngOnInit(): void {
    this.action.loadStudentsFromServer();
    this.sub = this.students$.subscribe(data => {
      data[0]
        ? (this.popUpInfo = this.popUpService.getResolvedLoadedPopUp())
        : (this.popUpInfo = this.popUpService.getRejectedLoadedPopUp());
    });
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
