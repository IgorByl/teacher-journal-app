import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { NotFoundComponent } from "./not-found-page.component";

describe("NotFoundComponent", () => {
  let component: NotFoundComponent,
    fixture: ComponentFixture<NotFoundComponent>,
    de: DebugElement,
    el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
    });

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css("a"));
    el = de.nativeElement;
  });

  it("should create a component instance", () => {
    expect(component).toBeDefined();
  });
  it("shouldn't be in DOM untill call DetectChanges", () => {
    expect(el.textContent).toEqual("");
  });
  it("should display a", () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.rout);
  });
  it("should display different data", () => {
    component.rout = "Newspsper";
    fixture.detectChanges();
    expect(el.textContent).toContain("Newspsper");
  });
});
