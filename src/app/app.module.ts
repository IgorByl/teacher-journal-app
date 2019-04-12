import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./root/app.component";
import { StudentsComponent } from "./components/students/students.component";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from "./routing/app-routing.module";
import { HttpService, StoreService } from "./common/services";
import { HttpClientModule } from "@angular/common/http";

import { StatisticsComponent } from "./components/statistics/statistics.component";
import { ExportComponent } from "./components/export/export.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NotFoundComponent } from "./components/not-found-page/not-found-page.component";
import { DatePipe, AveragePipe } from "./common/pipes";
import { TableDirective, SendButtonDirective } from "./common/directives";

import { NgReduxModule } from "@angular-redux/store";
import { StoreModule } from "./redux/module";
// import { rootReducer, IAppState, INITIAL_STATE } from "./redux/store/store";
// import { CounterActions } from "./redux/actions/counter";

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
    TableDirective,
    SendButtonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    StoreModule
  ],
  providers: [HttpService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
  //   const storeEnhancers: any = devTools.isEnabled() ? [ devTools.enhancer() ] : [];

  //   ngRedux.configureStore(
  //     rootReducer,
  //     INITIAL_STATE,
  //     [],
  //     storeEnhancers);
  // }
}
