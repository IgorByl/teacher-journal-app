import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { StudentsComponent } from "../components/students/students.component";

import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { ListOfStudentsService } from "../common/services";

@NgModule({
  declarations: [AppComponent, StudentsComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [ListOfStudentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
