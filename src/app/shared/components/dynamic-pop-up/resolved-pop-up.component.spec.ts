import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ResolvedPopUpComponent } from "./resolved-pop-up.component";

export interface IExpectedMessage {
    [message: string]: string;
}

describe("RejectedPopUpComponent", () => {
  let component: ResolvedPopUpComponent,
    fixture: ComponentFixture<ResolvedPopUpComponent>,
    messageEl: DebugElement;
  const expectedMessage: IExpectedMessage = { message: "Save succesfully!" };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolvedPopUpComponent],
    });

    fixture = TestBed.createComponent(ResolvedPopUpComponent);
    component = fixture.componentInstance;

    messageEl = fixture.debugElement.query(By.css("h4"));
  });

  it("should display message", () => {
    component.data = expectedMessage;
    fixture.detectChanges();
    expect(messageEl.nativeElement.textContent).toContain(expectedMessage.message);
  });
});
