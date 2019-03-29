import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StatisticsComponent } from "../components/statistics/statistics.component";
import { ExportComponent } from "../components/export/export.component";
import { StudentsComponent } from "../components/students/students.component";
import { SubjectsComponent } from "../components/subjects/subjects.component";
import { NotFoundComponent } from "../components/not-found-page/not-found-page.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/students", pathMatch: "full" },
  { path: "statistics", component: StatisticsComponent },
  { path: "export", component: ExportComponent },
  { path: "students", component: StudentsComponent },
  { path: "subjects", component: SubjectsComponent },
  { path: "subjects/:id", component: DashboardComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
