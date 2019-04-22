import { DatePipe } from "./date.pipe";

describe("DatePipe", () => {
  let pipe: DatePipe = new DatePipe();
  it("should return string date format dd/mm", () => {
    expect(pipe.transform("6.12")).toBe("06/12");
  });
  it("should return string date format dd/mm", () => {
    expect(pipe.transform("03.07")).toBe("03/07");
  });
});
