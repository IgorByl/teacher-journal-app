import { SendDataService } from "./send-data";
import {Subject } from "rxjs";

describe("SendDataService", () => {
  let service: SendDataService = new SendDataService(null);

  it("should return value", (done: DoneFn) => {
    const subValue: Subject<string> = new Subject<string>();
    const spy: jasmine.Spy = spyOn(
      service,
      "sendActualeDataToServer"
    ).and.returnValue(subValue.asObservable());
    expect(service.sendActualeDataToServer(null)).toEqual(subValue.asObservable());
    expect(spy.calls.count()).toBe(1);
    done();
  });
});
