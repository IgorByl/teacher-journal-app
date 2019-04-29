import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./root/app.component";
import { StudentsComponent } from "./components/students/students.component";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from "./routing/app-routing.module";
import { SendDataService, DataService } from "./common/services";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { StatisticsComponent } from "./components/statistics/statistics.component";
import { ExportComponent } from "./components/export/export.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NotFoundComponent } from "./components/not-found-page/not-found-page.component";
import { DatePipe, AveragePipe, StatisticPipe } from "./common/pipes";
import { TableDirective, SendButtonDirective } from "./common/directives";

import { NgReduxModule } from "@angular-redux/store";
import { StoreModule } from "./redux/store.module";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
} from "@ngx-translate/core";
import { DropdownModule } from "./components/statistics/dropdown-control/dropdown-control.module";

import { ResolvedPopUpComponent } from "./components/dynamic-pop-up/resolved-pop-up.component";
import { RejectedPopUpComponent } from "./components/dynamic-pop-up/rejected-pop-up.component";
import { PopupDirective } from "./common/directives";
import { PopUpComponent } from "./components/dynamic-pop-up/pop-up.component";
import { PopUpService } from "./common/services";

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http);
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  public handle(params: MissingTranslationHandlerParams): string {
    return "???";
  }
}

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StatisticsComponent,
    ExportComponent,
    SubjectsComponent,
    DashboardComponent,
    NotFoundComponent,
    DatePipe,
    AveragePipe,
    StatisticPipe,
    TableDirective,
    SendButtonDirective,
    PopUpComponent,
    ResolvedPopUpComponent,
    RejectedPopUpComponent,
    PopupDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    StoreModule,
    DropdownModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler,
      },
      useDefaultLang: false,
    }),
  ],
  providers: [SendDataService, DataService, PopUpService],
  bootstrap: [AppComponent],
  entryComponents: [ResolvedPopUpComponent, RejectedPopUpComponent],
})
export class AppModule {}
