import { Injectable } from "@angular/core";
import { CounterEpics } from "./students";

@Injectable()
export class RootEpics {
  constructor(private counterEpic: CounterEpics) {}

  public createEpics() {
    return [this.counterEpic.createEpic()];
  }
}
