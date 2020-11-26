import { FETCH_BREEDS_NAME } from "./breedsName.types";
import axios from "axios";

export const fetchBreedsName = () => async (dispatch) => {
  const response = await axios.get("https://dog.ceo/api/breeds/list/all");
  dispatch({ type: FETCH_BREEDS_NAME, payload: response.data.message });
};
