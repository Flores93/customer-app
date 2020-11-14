import { handleActions } from "redux-actions";

import { FETCH_CUSTOMERS } from "../constants";

export const costumers = handleActions(
  {
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
  },
  []
);
