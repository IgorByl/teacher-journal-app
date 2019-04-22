import { StudentsComponent } from "./students.component";

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
