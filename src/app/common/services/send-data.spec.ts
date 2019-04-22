import { SendDataService } from "./send-data";

describe("SendDataService", () => {
  let service: SendDataService = new SendDataService();
  it("should return Observable value", (done: DoneFn) => {
    const data: {} = { name: "Ivan", lastName: "Popov" };
    service.sendActualeDataToServer(data).subscribe(value => {
      expect(value).toBe({});
      done();
    });
  });
});
