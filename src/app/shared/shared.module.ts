import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent } from "./components/button/button";

import { HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FormSchemaComponent } from "./components/form-schema/form";
import { ResolvedPopUpComponent } from "./components/dynamic-pop-up/resolved-pop-up.component";
import { PopUpComponent } from "./components/dynamic-pop-up/pop-up.component";
import { RejectedPopUpComponent } from "./components/dynamic-pop-up/rejected-pop-up.component";
import { PopupDirective } from "../common/directives";
import { NotFoundComponent } from "./components/not-found-view/not-found-page.component";
import { AppRoutingModule } from "../routing/app-routing.module";

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
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
  exports: [
    ButtonComponent,
    FormSchemaComponent,
    PopUpComponent,
    ResolvedPopUpComponent,
    RejectedPopUpComponent,
    PopupDirective,
    NotFoundComponent,
  ],
  declarations: [
    ButtonComponent,
    FormSchemaComponent,
    PopUpComponent,
    ResolvedPopUpComponent,
    RejectedPopUpComponent,
    PopupDirective,
    NotFoundComponent,
  ],
  entryComponents: [ResolvedPopUpComponent, RejectedPopUpComponent],
})
export class SharedModule {}
