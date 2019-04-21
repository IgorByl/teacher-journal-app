import { Component, OnInit } from "@angular/core";
import { TITLE_ROOTS } from "../common/constants";
import { Router } from "@angular/router";

import { NgRedux } from "@angular-redux/store";
import { IStudent } from "../common/entities";
import { StudentsActions } from "../redux/actions";
import { TranslateService } from "@ngx-translate/core";

import {
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
} from "@angular/core";
import { MessageComponent } from "../components/dynamic-pop-up/pop-up.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  public routs: string[] = TITLE_ROOTS;

  @ViewChild("messagecontainer", { read: ViewContainerRef })
  public entry: ViewContainerRef;
  public componentRef: ComponentRef<MessageComponent>;

  constructor(
    private router: Router,
    private ngRedux: NgRedux<IStudent>,
    private action: StudentsActions,
    public translate: TranslateService,
    private resolver: ComponentFactoryResolver
  ) {
    translate.addLangs(["en", "ru"]);
    translate.setDefaultLang("en");

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? "en" : browserLang);
  }
  public ngOnInit(): void {
    this.action.getData();
  }

  public createComponent(message: string): void {
    this.entry.clear();
    const factory: ComponentFactory<
      MessageComponent
    > = this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message = message;
  }

  public destroyComponent(): void {
    this.componentRef.destroy();
  }
}
