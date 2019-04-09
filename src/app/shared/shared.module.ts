import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { FormComponent } from "./components/form/form";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent } from "./components/button/button";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormComponent, ButtonComponent],
  declarations: [FormComponent, ButtonComponent],
})
export class SharedModule {}
