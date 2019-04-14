import { NgModule } from "@angular/core";
import {
  NgReduxModule,
  NgRedux,
  DevToolsExtension,
} from "@angular-redux/store";
import { createLogger } from "redux-logger";
import { IAppState } from "./model";
import { rootReducer } from "./reducer";
import { CounterActions } from "./actions";
import { RootEpics } from "./epics";
import { CounterEpics } from "./epics/students";

@NgModule({
  imports: [NgReduxModule],
  providers: [CounterActions, RootEpics, CounterEpics],
})
export class StoreModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    rootEpics: RootEpics
  ) {
    const storeEnhancers: any = devTools.isEnabled()
      ? [devTools.enhancer()]
      : [];
    const middleware: any = [createLogger(), ...rootEpics.createEpics()];
    ngRedux.configureStore(rootReducer, {}, middleware, storeEnhancers);
  }
}
