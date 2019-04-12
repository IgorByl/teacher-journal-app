import { NgModule } from "@angular/core";

import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore,
} from "redux";

import {
  NgReduxModule,
  NgRedux,
  DevToolsExtension,
} from "@angular-redux/store";

import { createLogger } from "redux-logger";

import { IAppState } from "./model";
import { rootReducer } from "./reducers";
import { RootEpics } from "./epics";

export const store: Store<IAppState> = createStore(
  rootReducer,
  applyMiddleware(createLogger())
);

@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    rootEpics: RootEpics,
    ngRedux: NgRedux<IAppState>
  ) {
    // store.configureStore(
    //   rootReducer,
    //   {},
    //   [createLogger(), ...rootEpics.createEpics()],
    //   devTools.isEnabled() ? [devTools.enhancer()] : []
    // );
    ngRedux.provideStore(store);
  }
}
