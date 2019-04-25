import { StatisticActions } from "../actions";
import { StatisticActionTypes, IDropdownSelectedData } from "../../common/entities";

const initialState: IDropdownSelectedData = {
  name: "",
  subjects: {},
};

export function statisticReducer(
  state: IDropdownSelectedData[] = [initialState],
  action: StatisticActionTypes
): IDropdownSelectedData[] {
  switch (action.type) {
    case StatisticActions.SET_STATISTIC_DATA_TO_STORE:
      return [ ...state = action.payload ];
    default:
      return state;
  }
}
