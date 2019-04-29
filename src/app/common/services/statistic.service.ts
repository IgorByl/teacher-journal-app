import { Injectable } from "@angular/core";
import { StatisticActions } from "src/app/redux/actions";
import { IStatistic } from "../entities";

@Injectable({ providedIn: "root" })
export class StatisticService {
  constructor(
    private action: StatisticActions
  ) {}

  public addStatistic(statistic: IStatistic): any {
    this.action.setStatisticToStore(statistic);
  }
}
