import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StatisticsComponent } from "../components/statistics/statistics.component";
import { ExportComponent } from "../components/export/export.component";
import { StudentsComponent } from "../components/students/students.component";
import { SubjectsComponent } from "../components/subjects/subjects.component";
import { NotFoundComponent } from "../shared/components/not-found-view/not-found-page.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { LoginComponent } from "../components/login/login.component";
import { DeactivateGuard } from "./../common/services";

const routes: Routes = [
  { path: "", redirectTo: "/students", pathMatch: "full" },
  { path: "statistics", component: StatisticsComponent },
  { path: "export", component: ExportComponent },
  { path: "students", component: StudentsComponent },
  { path: "subjects/:subject", component: DashboardComponent, canDeactivate: [DeactivateGuard] },
  { path: "subjects", component: SubjectsComponent },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "/not-found" },
  { path: "not-found", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
