import Alert from "./alert/reducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  alert: Alert,
});

export default allReducer;

export type AppState = ReturnType<typeof allReducer>;
