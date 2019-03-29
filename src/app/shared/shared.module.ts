import { NgModule } from '@angular/core';

import { FormComponent } from './formComponent/form.component';

@NgModule({
  exports: [FormComponent],
  declarations: [FormComponent]
})
export class SharedModule {}

