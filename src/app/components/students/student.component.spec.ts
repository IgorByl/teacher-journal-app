import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { StudentsComponent } from "./students.component";
import { PopUpService } from "src/app/common/services";

describe("StudentsComponent", () => {
  const component: StudentsComponent = new StudentsComponent();
  it("clicked should toggle isVisible", () => {
    expect(component.isVisible).toBe(false, "false at first");
    component.toggleVisibility();
    expect(component.isVisible).toBe(true, "true after click");
    component.toggleVisibility();
    expect(component.isVisible).toBe(false, "false on second click");
  });
});

describe("StudentsComponent", () => {
  let component: StudentsComponent,
    fixture: ComponentFixture<StudentsComponent>,
    popupService: PopUpService,
    de: DebugElement,
    el: HTMLElement,
    popupServiceSub: Partial<PopUpService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsComponent],
      providers:[{ provide: PopUpService, useValue: popupServiceSub}]
    });
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    popupService = fixture.debugElement.injector.get(PopUpService);
    de = fixture.debugElement.query(By.css("td"));
    el = de.nativeElement;
  });

  it("should display original title", () => {
    fixture.detectChanges();
    expect(Number(el.textContent)).toContain(component.students[0].id);
  });

  it("should display different data", () => {
    component.students[2].name = "Fedia";
    fixture.detectChanges();
    expect(el.textContent).toContain("Fedia");
  });
});
