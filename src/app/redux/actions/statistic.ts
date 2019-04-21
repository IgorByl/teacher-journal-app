import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IStatistic } from "../../common/entities";

@Injectable()
export class StatisticActions {
  public static SET_STATISTIC_DATA: string = "SET_STATISTIC_DATA";

  constructor(private ngRedux: NgRedux<IStatistic>) {}

  public setStatisticToStore(payload: IStatistic): void {
    this.ngRedux.dispatch({ type: StatisticActions.SET_STATISTIC_DATA, payload });
  }
}
