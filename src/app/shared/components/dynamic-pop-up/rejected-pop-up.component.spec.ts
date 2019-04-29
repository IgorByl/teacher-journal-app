import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { RejectedPopUpComponent } from "./rejected-pop-up.component";
import { IExpectedMessage } from "./resolved-pop-up.component.spec";

describe("RejectedPopUpComponent", () => {
  let component: RejectedPopUpComponent,
    fixture: ComponentFixture<RejectedPopUpComponent>,
    messageEl: DebugElement;
  const expectedMessage: IExpectedMessage = { message: "Saving failed!" };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectedPopUpComponent],
    });

    fixture = TestBed.createComponent(RejectedPopUpComponent);
    component = fixture.componentInstance;

    messageEl = fixture.debugElement.query(By.css("h4"));
  });

  it("should display message", () => {
    component.data = expectedMessage;
    fixture.detectChanges();
    expect(messageEl.nativeElement.textContent).toContain(expectedMessage.message);
  });
});
