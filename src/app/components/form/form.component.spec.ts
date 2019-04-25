import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { FormComponent } from "./form.component";
import {
  TranslateService,
  TranslateModule,
  MissingTranslationHandler,
  TranslateLoader,
} from "@ngx-translate/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  HttpLoaderFactory,
} from "src/app/app.module";
import { formControlNames } from "src/app/common/constants/__mock-data__";

describe("FormComponent-isolated", () => {
  it("should return false", () => {
    const component: FormComponent = new FormComponent(null, null);
    const isVisible: boolean = false;

    component.isParentDataVisible = isVisible;
    const stubValue: undefined = undefined;
    const spy: jasmine.Spy = spyOn(component, "save").and.returnValue(
      stubValue
    );
    component.hiddenParentDataVisibility.subscribe(d => expect(d).toBe(isVisible));
    component.save();
  });
});

describe("FormComponent-integration", () => {
  let component: FormComponent,
    fixture: ComponentFixture<FormComponent>,
    de: DebugElement,
    el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
          useDefaultLang: false,
        }),
      ],
      providers: [FormBuilder, TranslateService, HttpClient],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css("form"));
  });

  it("should create component", () => {
    expect(component).toBeTruthy();
  });

  // it("should raises selected event when clicked", () => {
  //   component.formControlsNames = formControlNames;
  //   component.isVisible = true;
  //   component.createForm();
  //   let sendData: FormGroup;
  //   fixture.detectChanges();
  //   component.transferFormData.subscribe(data => (sendData = data));
  //   fixture.detectChanges();
  //   de.triggerEventHandler("ngSubmit", null);
  //   expect(sendData).toEqual({});
  // });
});
