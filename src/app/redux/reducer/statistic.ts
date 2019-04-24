import { StatisticActions } from "../actions";
import { IStatistic, StatisticActionTypes } from "../../common/entities";

export function statisticReducer(state: IStatistic = {}, action: StatisticActionTypes ): IStatistic {
  switch (action.type) {
    case StatisticActions.SET_STATISTIC_DATA_TO_STORE:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
