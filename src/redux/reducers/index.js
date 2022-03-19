import { combineReducers } from "redux";
import filters from "./filters";
import phones from "./phones";
import cart from "./cart";

const rootReduser = combineReducers({
  filters ,
  phones ,
  cart ,
});

export default rootReduser;
