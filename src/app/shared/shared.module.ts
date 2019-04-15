import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { FormComponent } from "./components/form/form";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent } from "./components/button/button";

import { HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
} from "@ngx-translate/core";

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http);
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  public handle(params: MissingTranslationHandlerParams): string {
    return "???";
  }
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
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler,
      },
      useDefaultLang: false,
    }),
  ],
  exports: [FormComponent, ButtonComponent],
  declarations: [FormComponent, ButtonComponent],
})
export class SharedModule {}
