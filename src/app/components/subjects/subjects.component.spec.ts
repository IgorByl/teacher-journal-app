import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";

import { SubjectsComponent } from "./subjects.component";
import { PopUpService, DataService } from "src/app/common/services";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  MyMissingTranslationHandler,
  HttpLoaderFactory,
} from "src/app/app.module";
import {
  TranslateService,
  TranslateModule,
  MissingTranslationHandler,
  TranslateLoader,
} from "@ngx-translate/core";
import { MockPopUpService, MockDataService } from "src/app/common/constants/";
import { NgReduxModule } from "@angular-redux/store";
import { StoreModule } from "src/app/redux/store.module";

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
          missingTranslationHandler: {
            provide: MissingTranslationHandler,
            useClass: MyMissingTranslationHandler,
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
        {
          provide: DataService,
          useClass: MockDataService,
        },
        TranslateService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsComponent);
    component = fixture.componentInstance;
    component.isVisible = true;
    de = fixture.debugElement.query(By.css(".subjectsWrapper__title"));
  });

  it("should create component", () => {
    expect(component).toBeTruthy();
  });

  // it("should display original title", () => {
  //   component.isVisible = true;
  //   fixture.detectChanges();
  //   el = de.nativeElement;
  //   expect(el.textContent).toContain(component.subjects[0]);
  // });

  // it("should display different data", () => {
  //   component.subjects = ["Singing", "Singing", "Singing", "Singing"];
  //   component.isVisible = true;
  //   fixture.detectChanges();
  //   de = fixture.debugElement.query(By.css("div"));
  //   el = de.nativeElement;
  //   expect(el.textContent).toContain("Singing");
  // });

  it("should initialize data correct", () => {
    component.ngOnInit();
    expect(component.subjects).toEqual([]);
    expect(component.students).toEqual([]);
  });

  it("should show dynamic component OnInit", () => {
    component.ngOnInit();
    expect(component.popUp).toBeFalsy();
  });

  it("should destroy subscription", () => {
    component.ngOnDestroy();
    expect(component.sub).not.toBeDefined();
  });
});
