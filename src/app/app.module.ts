import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./root/app.component";
import { StudentsComponent } from "./components/students/students.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from "./routing/app-routing.module";
import {
  SendDataService,
  ExcelService,
  studentsAPIProvider,
} from "./common/services";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { StatisticsComponent } from "./components/statistics/statistics.component";
import { ExportComponent } from "./components/export/export.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DatePipe, AveragePipe } from "./common/pipes";
import { TableDirective, SendButtonDirective } from "./common/directives";

import { NgReduxModule } from "@angular-redux/store";
import { StoreModule } from "./redux/store.module";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { DropdownModule } from "./components/statistics/dropdown-control/dropdown-control.module";

import { PopUpService } from "./common/services";
import { FormComponent } from "./components/form/form.component";
import { LoaderComponent } from "./shared/components/loader/loader";
import { AdminModule } from "./components/admin/admin.module";
import { LoginComponent } from "./components/login/login.component";

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StatisticsComponent,
    ExportComponent,
    SubjectsComponent,
    DashboardComponent,
    DatePipe,
    AveragePipe,
    TableDirective,
    SendButtonDirective,
    FormComponent,
    LoaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    StoreModule,
    DropdownModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    }),
    AppRoutingModule,
  ],
  providers: [SendDataService, PopUpService, ExcelService, studentsAPIProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
