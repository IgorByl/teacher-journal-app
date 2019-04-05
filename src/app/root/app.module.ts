import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { StudentsComponent } from "../components/students/students.component";

import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { ListOfStudentsService, GetListOfSubjectsService } from "../common/services";
import { StatisticsComponent } from "../components/statistics/statistics.component";
import { ExportComponent } from "../components/export/export.component";
import { SubjectsComponent } from "../components/subjects/subjects.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StatisticsComponent,
    ExportComponent,
    SubjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [ListOfStudentsService, GetListOfSubjectsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
