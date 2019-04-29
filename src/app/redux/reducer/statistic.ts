import { StatisticActions } from "../actions";
import { IStatistic } from "../../common/entities";

export function statisticReducer(state: any = {}, action: any ): IStatistic {
  switch (action.type) {
    case StatisticActions.SET_STATISTIC_DATA:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
