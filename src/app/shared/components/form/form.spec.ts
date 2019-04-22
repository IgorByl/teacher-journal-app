import { FormComponent } from "./form";
import { FormGroup } from "@angular/forms";

describe("FormComponent", () => {
  const component: FormComponent = new FormComponent();
  const isVisible: boolean = false;

  component.isVisible = isVisible;

  it("should return false", () => {
    component.hiddenVisibility.subscribe(d => expect(d).toBe(isVisible));
    component.save();
  });
});
