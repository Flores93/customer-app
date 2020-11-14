import { createAction } from "redux-actions";
import { FETCH_CUSTOMERS } from "./../constants";

import { urlCostumers } from "./../api/urls";
import { apiGet } from "./../api";

export const fetchCustomers = createAction(
  FETCH_CUSTOMERS,
  apiGet(urlCostumers)
);
