import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";

import { StudentsComponent } from "./students.component";
import { PopUpService } from "src/app/common/services";
import { data } from "../../common/constants";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpLoaderFactory } from "src/app/app.module";
import {
  TranslateService,
  TranslateModule,
  TranslateLoader,
} from "@ngx-translate/core";
import { MockPopUpService } from "src/app/common/constants/__tests-mock-data__";
import { of } from "rxjs";
import { NgReduxModule } from "@angular-redux/store";
import { StoreModule } from "src/app/redux/store.module";
import { StudentsActions } from "src/app/redux/actions";

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
        TranslateService,
        StudentsActions,
      ],
    });
    fixture = TestBed.createComponent(StudentsComponent);
    compt = fixture.componentInstance;
    popupService = fixture.debugElement.injector.get(PopUpService);
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

  it("should display table header", () => {
    compt.isComponentTemplateHidden = false;
    fixture.detectChanges();
    compt.students[0] = data[0];
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("th"));
    el = de.nativeElement;
    expect(el.textContent).toContain("id");
  });

  it("should display different data in table", () => {
    compt.isComponentTemplateHidden = false;
    fixture.detectChanges();
    compt.students = data;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css(".table__tableData_studentName"));
    el = de.nativeElement;
    expect(el.textContent).toContain("Ivan");
  });

  it("clicked should toggle visibility", () => {
    expect(compt.isComponentTemplateHidden).toBe(false, "false at first");
    compt.toggleTemplateVisibility();
    expect(compt.isComponentTemplateHidden).toBe(true, "true after click");
    compt.toggleTemplateVisibility();
    expect(compt.isComponentTemplateHidden).toBe(
      false,
      "false on second click"
    );
  });

  it("should initialize data correct", () => {
    fixture.detectChanges();
    expect(compt.subjects).toEqual([]);
    expect(compt.students).toEqual([]);
  });

  it("shouldn't show dynamic compt OnInit", () => {
    fixture.detectChanges();
    expect(compt.popUpInfo).not.toBeDefined();
  });

  it("should destroy subscription", () => {
    compt.ngOnDestroy();
    fixture.detectChanges();
    expect(compt.sub).toBeDefined();
  });

  it("should sort correct", () => {
    compt.toggleSort = false;
    fixture.detectChanges();
    compt.students = data;
    compt.sortRows("id");
    expect(compt.toggleSort).toBe(true);
    expect(compt.students).toBe(data.sort((a, b) => b.id - a.id));
  });
});
