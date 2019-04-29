import { NgModule } from "@angular/core";
import {
  NgReduxModule,
  NgRedux,
  DevToolsExtension,
} from "@angular-redux/store";
import { createLogger } from "redux-logger";
import { rootReducer } from "./reducer";
import { StudentsActions, StatisticActions } from "./actions";
import { rootEpic } from "./epics";
import { createEpicMiddleware, EpicMiddleware } from "redux-observable";

@NgModule({
  imports: [NgReduxModule],
  providers: [StudentsActions, StatisticActions],
})
export class StoreModule {
  constructor(ngRedux: NgRedux<{}>, devTools: DevToolsExtension) {
    const storeEnhancers: any = devTools.isEnabled()
      ? [devTools.enhancer()]
      : [];
    const epicMiddleware: EpicMiddleware<any> = createEpicMiddleware();
    const middleware: any = [createLogger(), epicMiddleware];
    ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      storeEnhancers
    );
    epicMiddleware.run(rootEpic);
  }
}
