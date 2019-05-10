import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  AdminRoutingModule,
  adminRouterComponents,
} from "./admin-routing.module";
import { AuthService } from "src/app/common/services";

@NgModule({
  declarations: [...adminRouterComponents],
  imports: [CommonModule, AdminRoutingModule],
  providers: [AuthService],
})
export class AdminModule {}
