import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ExportComponent } from './export/export.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubjectsDashboardComponent } from './subjects-dashboard/subjects-dashboard.component';
import { AddStudentComponent } from './add-student/add-student.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    StatisticsComponent,
    ExportComponent,
    NotFoundComponent,
    SubjectsDashboardComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
