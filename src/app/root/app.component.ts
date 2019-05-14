import { Component, OnInit, OnDestroy } from "@angular/core";
import { TITLE_ROOTS } from "../common/constants";
import { Router, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { StudentsActions } from "../redux/actions";
import { TranslateService } from "@ngx-translate/core";
import { select } from "@angular-redux/store";
import { Observable, Subscription } from "rxjs";
import { IStudent, PopUpItem } from "../common/entities";
import { PopUpService } from "../common/services";
import { filter, map, switchMap } from "rxjs/operators";

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
  public now: Date = new Date();

  constructor(
    private router: Router,
    private action: StudentsActions,
    private popUpService: PopUpService,
    public translate: TranslateService,
    private titleService: Title
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
    this.setPageTitles();
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public setPageTitles(): void {
    let titleSub: Subscription;
    this.sub.add(titleSub);
    titleSub = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === "primary"),
        switchMap(route => route.data)
      )
      .subscribe(data => this.titleService.setTitle(data.title));
  }
}
