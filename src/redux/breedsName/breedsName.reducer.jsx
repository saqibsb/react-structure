import _ from "lodash";
import { FETCH_BREEDS_NAME } from "./breedsName.types";
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BREEDS_NAME:
      return [...state, action.payload];
    default:
      return state;
  }
};
