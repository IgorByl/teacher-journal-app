import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { FormComponent } from "./form/form";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent } from "./button/button";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormComponent, ButtonComponent],
  declarations: [FormComponent, ButtonComponent],
})
export class SharedModule {}
