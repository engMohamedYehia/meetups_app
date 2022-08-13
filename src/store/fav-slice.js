import { createSlice } from "@reduxjs/toolkit/";

const favslice = createSlice({
  name: "fav",
  initialState: {
    favList: [],
    buttonstatusMain: false,
    buttonstatusFav: false,
  },
  reducers: {
    addtolist(state, actions) {
      const check = state.favList.find(
        (fav) => fav.title === actions.payload.title
      );
      if (!check) {
        state.favList.push(actions.payload);
      }
    },
    setButtonMain(state) {
      state.buttonstatusMain = true;
      state.buttonstatusFav = false;
    },
    setButtonFav(state) {
      state.buttonstatusMain = false;
      state.buttonstatusFav = true;
    },
    delitem(state, actions) {
      state.favList = state.favList.filter(
        (fav) => fav.title != actions.payload.title
      );
    },
  },
});

export const favactions = favslice.actions;
export default favslice;
