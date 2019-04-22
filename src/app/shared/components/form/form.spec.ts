import { FormComponent } from "./form";
import { FormBuilder } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

describe("FormComponent", () => {
  const component: FormComponent = new FormComponent();
  const isVisible: boolean = false;

  component.isVisible = isVisible;
  const stubValue: any = undefined;
  it("should return false", () => {
    const spy: jasmine.Spy = spyOn(component, "save").and.returnValue(stubValue);
    component.hiddenVisibility.subscribe(d => expect(d).toBe(isVisible));
    component.save();
  });
});
