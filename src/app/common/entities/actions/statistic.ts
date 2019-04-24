import { IStatistic } from "../statistic";

export type StatisticActionTypes = ISetStatisticToStoreAction;

export interface ISetStatisticToStoreAction {
  type: StatisticActions.SET_STATISTIC_DATA_TO_STORE;
  payload: IStatistic;
}

enum StatisticActions {
  SET_STATISTIC_DATA_TO_STORE = "SET_STATISTIC_DATA_TO_STORE",
}
