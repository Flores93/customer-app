import { combineReducers } from "redux";
import { reducer as reducerForm } from "redux-form";

import { costumers } from "./customers";

export default combineReducers({
  costumers,
  form: reducerForm,
});
