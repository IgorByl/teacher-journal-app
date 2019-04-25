import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { FormComponent } from "./components/form/form";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent } from "./components/button/button";

import { HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FormSchemaComponent } from "../components/form/form.component";

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    }),
  ],
  exports: [FormComponent, ButtonComponent, FormSchemaComponent],
  declarations: [FormComponent, ButtonComponent, FormSchemaComponent],
})
export class SharedModule {}
