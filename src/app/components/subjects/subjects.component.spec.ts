import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";

import { SubjectsComponent } from "./subjects.component";
import { PopUpService } from "src/app/common/services";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpLoaderFactory } from "src/app/app.module";
import {
  TranslateService,
  TranslateModule,
  TranslateLoader,
} from "@ngx-translate/core";
import { MockPopUpService } from "src/app/common/constants/";
import { NgReduxModule } from "@angular-redux/store";
import { StoreModule } from "src/app/redux/store.module";
import { StudentsActions } from "src/app/redux/actions";

describe("SubjectsComponent", () => {
  let component: SubjectsComponent,
    fixture: ComponentFixture<SubjectsComponent>,
    de: DebugElement,
    el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NgReduxModule,
        StoreModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
          useDefaultLang: false,
        }),
      ],
      declarations: [SubjectsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: PopUpService,
          useClass: MockPopUpService,
        },
        TranslateService,
        StudentsActions,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsComponent);
    component = fixture.componentInstance;
    component.isComponentTemplateHidden = false;
  });

  it("should create component", () => {
    expect(component).toBeTruthy();
  });

  it("should display original title", () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css(".subjectsWrapper__title"));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain("SUB.title");
  });

  it("should display different data", () => {
    fixture.detectChanges();
    component.subjects = ["Singing"];
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("div"));
    el = de.nativeElement;
    expect(el.textContent).toContain("Singing");
  });

  it("should initialize data correct", () => {
    component.ngOnInit();
    expect(component.subjects).toEqual([]);
    expect(component.students).toEqual([]);
  });

  it("should show dynamic component OnInit", () => {
    component.ngOnInit();
    expect(component.popUpInfo).toBeFalsy();
  });

  it("should destroy subscription", () => {
    component.ngOnDestroy();
    expect(component.sub).not.toBeDefined();
  });
});
