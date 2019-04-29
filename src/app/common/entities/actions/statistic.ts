import { IDropdownSelectedData } from "../dropdown";

export type StatisticActionTypes = ISetStatisticToStoreAction;

export interface ISetStatisticToStoreAction {
  type: StatisticActions.SET_STATISTIC_DATA_TO_STORE;
  payload: IDropdownSelectedData[];
}

enum StatisticActions {
  SET_STATISTIC_DATA_TO_STORE = "SET_STATISTIC_DATA_TO_STORE",
}
