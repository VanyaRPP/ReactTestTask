import { combineReducers } from "redux";
import { appReduser } from "./appReduser";
import { dataReduser } from "./dataReduser";


export const rootReducer=combineReducers({
  app: appReduser,
  data: dataReduser,
})