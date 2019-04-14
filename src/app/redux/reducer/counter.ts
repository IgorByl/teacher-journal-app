import { Action } from "redux";
import { CounterActions } from "../actions/counter";
import { IAppState } from "../model";

export const INITIAL_STATE: IAppState = {
  counter: 0,
};

export function counterReducer(state: IAppState = INITIAL_STATE, action: Action): IAppState {
  switch (action.type) {
    case CounterActions.INCREMENT: return { ...state, counter: state.counter + 1 };
    case CounterActions.DECREMENT: return { ...state, counter: state.counter - 1 };
    default: return state;
  }
}