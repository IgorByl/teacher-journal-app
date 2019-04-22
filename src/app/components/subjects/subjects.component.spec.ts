import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { SubjectsComponent } from "./subjects.component";

describe("SubjectsComponent", () => {
  let component: SubjectsComponent,
    fixture: ComponentFixture<SubjectsComponent>,
    de: DebugElement,
    el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css("div"));
    el = de.nativeElement;
  });

  it("should display original title", () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.subjects[0]);
  });

  it("should display different data", () => {
    component.subjects[0] = "Singing";
    fixture.detectChanges();
    expect(el.textContent).toContain("Singing");
  });
});
