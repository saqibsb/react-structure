import _ from "lodash";
import { FETCH_SELECTED_BREED } from "./breedImages.types";
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SELECTED_BREED:
      return [...state, action.payload];
    default:
      return state;
  }
};
