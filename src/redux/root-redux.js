import { combineReducers } from "redux";

import breedsName from "./breedsName/breedsName.reducer";
import breedSelectedImages from "./breedImages/breedImages.reducer";

const rootReducer = combineReducers({
  breeds: breedsName,
  breedImages: breedSelectedImages,
});

export default rootReducer;
