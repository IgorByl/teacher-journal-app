import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";

import { StudentsComponent } from "./students.component";
import { PopUpService, DataService } from "src/app/common/services";
import { data } from "../../common/constants";
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
import {
  MockDataService,
  MockPopUpService,
} from "src/app/common/constants/__mock-data__";
import { Subscription, Observable } from "rxjs";
import { of } from "rxjs";
import { NgReduxModule } from "@angular-redux/store";
import { StoreModule } from "src/app/redux/store.module";

describe("StudentsComponent", () => {
  let compt: StudentsComponent,
    fixture: ComponentFixture<StudentsComponent>,
    de: DebugElement,
    el: HTMLElement,
    popupService: PopUpService,
    addNewStudentResolvedPopUpSpy: jasmine.Spy;

  beforeEach(() => {
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
      declarations: [StudentsComponent],
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
    });
    fixture = TestBed.createComponent(StudentsComponent);
    compt = fixture.componentInstance;
    popupService = fixture.debugElement.injector.get(PopUpService);
    de = fixture.debugElement.query(By.css("td"));
  });

  it("should create compt", () => {
    expect(compt).toBeTruthy();
  });

  it("shouldn't show pop-up before OnInit", () => {
    addNewStudentResolvedPopUpSpy = spyOn(
      popupService,
      "addNewStudentResolvedPopUp"
    ).and.returnValue({ message: "Student succesfully added!" });
    expect(addNewStudentResolvedPopUpSpy.calls.any()).toBe(false);
  });

  it("should still no show pop-up but spy was called", () => {
    compt.sub = of(data).subscribe();
    fixture.detectChanges();
    expect(addNewStudentResolvedPopUpSpy.calls.any()).toBe(false);
  });

  it("should get data after resieve async", async(() => {
    spyOn(popupService, "addNewStudentResolvedPopUp").and.returnValue(
      Promise.resolve({ message: "Student succesfully added!" })
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(addNewStudentResolvedPopUpSpy.calls.any()).toBe(true);
      expect(compt.popUp).toBe({ message: "Student succesfully added!" });
    });
  }));

  // it("should display original title", () => {
  //   el = de.nativeElement;
  //   fixture.detectChanges();
  //   expect(Number(el.textContent)).toContain(compt.students[0].id);
  // });

  // it("should display different data", () => {
  //   compt.students = data;
  //   fixture.detectChanges();
  //   expect(el.textContent).toContain("Dmitry");
  // });

  it("clicked should toggle isVisible", () => {
    expect(compt.isVisible).toBe(false, "false at first");
    compt.toggleVisibility();
    expect(compt.isVisible).toBe(true, "true after click");
    compt.toggleVisibility();
    expect(compt.isVisible).toBe(false, "false on second click");
  });

  // it("should initialize data correct", () => {
    // fixture.detectChanges();
  //   expect(compt.subjects).toEqual([]);
  //   expect(compt.students).toEqual([]);
  // });

  it("should show dynamic compt OnInit", () => {
    fixture.detectChanges();
    expect(compt.popUp).not.toBeDefined();
  });

  it("should destroy subscription", () => {
    compt.ngOnDestroy();
    fixture.detectChanges();
    expect(compt.sub).toBeDefined();
  });

  it("should sort correct", () => {
    compt.toggleSort = false;
    compt.students = data;
    compt.sortRows("id");
    fixture.detectChanges();
    expect(compt.toggleSort).toBe(true);
    expect(compt.students).toBe(data.sort());
  });
});
