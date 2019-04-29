import { AveragePipe } from "./average";

describe("AveragePipe", () => {
  it("should return average value with 2 signes after dot", () => {
    let pipe: AveragePipe = new AveragePipe();
    expect(pipe.transform({"1": "14", "2": "6", "3": "10"})).toBe("10.00");
  });
});
