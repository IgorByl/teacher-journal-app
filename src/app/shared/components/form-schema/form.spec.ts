import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { FormSchemaComponent } from "./form";
import {
  TranslateService,
  TranslateModule,
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
import { formControlNames } from "src/app/common/constants/__tests-mock-data__";

describe("FormComponent-isolated", () => {
  it("should return false", () => {
    const component: FormSchemaComponent = new FormSchemaComponent();
    const isVisible: boolean = false;

    const stubValue: undefined = undefined;
    const spy: jasmine.Spy = spyOn(component, "save").and.returnValue(
      stubValue
    );
    component.raiseBooleanValueUp.subscribe(d => expect(d).toBe(isVisible));
    component.save();
  });
});

describe("FormComponent-integration", () => {
  let component: FormSchemaComponent,
    fixture: ComponentFixture<FormSchemaComponent>,
    de: DebugElement,
    el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormSchemaComponent],
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
    fixture = TestBed.createComponent(FormSchemaComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css("form"));
  });

  it("should create component", () => {
    expect(component).toBeTruthy();
  });

  // it("should raises selected event when clicked", () => {
  //   component.formControlsNames = formControlNames;
  //   component.createForm();
  //   let sendData: FormGroup;
  //   fixture.detectChanges();
  //   component.transferFormData.subscribe(data => (sendData = data));
  //   fixture.detectChanges();
  //   de.triggerEventHandler("ngSubmit", null);
  //   expect(sendData).toEqual({});
  // });
});
