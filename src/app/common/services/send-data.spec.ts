import { SendDataService } from "./send-data";
import { IStudent } from "../entities";
import { HttpClient } from "@angular/common/http";

describe("SendDataService", () => {
  let service: SendDataService = new SendDataService();
  it("should return Observable value", (done: DoneFn) => {
    const data: IStudent[] = [
      {
        name: "Ivan",
        lastName: "Popov",
        id: 2,
        desription: "none",
        subjects: {},
        address: " ",
      },
    ];
    service.sendActualeDataToServer(data).subscribe(value => {
      expect(value).toBe({});
      done();
    });
  });
});
