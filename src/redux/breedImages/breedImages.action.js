import { FETCH_SELECTED_BREED } from "./breedImages.types";
import axios from "axios";

export const fetchSelectedImages = (breedName) => async (dispatch) => {
  const response = await axios.get(
    `https://dog.ceo/api/breed/${breedName}/images`
  );
  dispatch({ type: FETCH_SELECTED_BREED, payload: response.data.message });
};
