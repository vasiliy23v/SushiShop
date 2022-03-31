import { combineReducers } from "redux";
import filters from "./filters";
import sushi from "./sushi";
import cart from "./cart";

const rootReduser = combineReducers({
  filters ,
  sushi ,
  cart ,
});

export default rootReduser;
