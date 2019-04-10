import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./root/app.component";
import { StudentsComponent } from "./components/students/students.component";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import {
  HttpService,
  SubjectsService,
  StoreService,
} from "./common/services";
import { HttpClientModule } from "@angular/common/http";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { ExportComponent } from "./components/export/export.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NotFoundComponent } from "./components/not-found-page/not-found-page.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StatisticsComponent,
    ExportComponent,
    SubjectsComponent,
    DashboardComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule, HttpClientModule],
  providers: [HttpService, SubjectsService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
