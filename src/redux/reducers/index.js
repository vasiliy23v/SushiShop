import { combineReducers } from "redux";
import filtersReducer from "./filters";
import phonesReducer from "./phones";

const rootReduser = combineReducers({
  filters : filtersReducer,
  phones : phonesReducer,
});

export default rootReduser;
