import { createSelector } from "reselect";

export const getCostumers = (state) => state.costumers;

export const getCostumerByDni = createSelector(
  (state, props) => state.costumers.find((c) => c.dni === props.dni),
  (costumer) => costumer
);
