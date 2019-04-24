import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IStatistic } from "../../common/entities";

@Injectable()
export class StatisticActions {
  public static SET_STATISTIC_DATA_TO_STORE: string = "SET_STATISTIC_DATA_TO_STORE";

  constructor(private ngRedux: NgRedux<IStatistic>) {}

  public setSelectedStatisticToStore(payload: IStatistic): void {
    this.ngRedux.dispatch({ type: StatisticActions.SET_STATISTIC_DATA_TO_STORE, payload });
  }
}
