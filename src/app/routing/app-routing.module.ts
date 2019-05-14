import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from "@angular/router";
import { StatisticsComponent } from "../components/statistics/statistics.component";
import { ExportComponent } from "../components/export/export.component";
import { StudentsComponent } from "../components/students/students.component";
import { SubjectsComponent } from "../components/subjects/subjects.component";
import { NotFoundComponent } from "../shared/components/not-found-view/not-found-page.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { LoginComponent } from "../components/login/login.component";
import { DeactivateGuard, ResolveGuard, AuthGuard } from "./../common/services";

const routes: Routes = [
  { path: "", redirectTo: "/students", pathMatch: "full" },
  { path: "statistics", component: StatisticsComponent, data: {title: "Statistics"} },
  { path: "export", component: ExportComponent },
  {
    path: "students",
    component: StudentsComponent,
    data: {title: "Students"}
    // resolve: {
    //   students: ResolveGuard,
    // },
  },
  {
    path: "subjects/:subject",
    component: DashboardComponent,
    canDeactivate: [DeactivateGuard],
  },
  { path: "subjects", component: SubjectsComponent,  data: {title: "Subjects"} },
  { path: "admin", canLoad: [AuthGuard], loadChildren: "../components/admin/admin.module#AdminModule"},
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "/not-found" },
  { path: "not-found", component: NotFoundComponent },
];

const extraOptions: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
