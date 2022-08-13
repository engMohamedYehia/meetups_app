import { configureStore } from "@reduxjs/toolkit";

import favslice from "./fav-slice";

const store = configureStore({
  reducer: {
    fav: favslice.reducer,
  },
});

export default store;
