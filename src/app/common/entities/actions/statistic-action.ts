import { IStatistic } from "../statistic";

export type StatisticActionTypes = ISetStatisticToStoreAction;

export interface ISetStatisticToStoreAction {
  type: StatisticActions.SET_STATISTIC_DATA;
  payload: IStatistic;
}

enum StatisticActions {
  SET_STATISTIC_DATA = "SET_STATISTIC_DATA",
}
