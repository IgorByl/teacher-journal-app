import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import {
  AdminDashboardComponent,
  ManageTasksComponent,
  ManageUsersComponent,
} from "./components";
import {AuthGuard } from "./../../common/services/index";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        canActivateChild: [AuthGuard],
        children: [
          { path: "users", component: ManageUsersComponent },
          { path: "tasks", component: ManageTasksComponent },
          { path: "", component: AdminDashboardComponent },
        ],
      },
    ],
  },
];

export const adminRouterComponents: (typeof AdminComponent)[] = [
  AdminComponent,
  ManageUsersComponent,
  ManageTasksComponent,
  AdminDashboardComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
