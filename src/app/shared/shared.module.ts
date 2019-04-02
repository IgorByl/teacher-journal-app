import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { FormComponent } from "./formComponent/form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormComponent],
  declarations: [FormComponent],
})
export class SharedModule {}
