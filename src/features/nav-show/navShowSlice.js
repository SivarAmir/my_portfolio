import { createSlice } from "@reduxjs/toolkit";

export const navShowSlice = createSlice({
  name: "navShow",
  initialState: {
    value: false,
  },
  reducers: {
    show: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value;
    },
    // notShow: (state) => {
    //   state.value = false;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { show } = navShowSlice.actions;

export default navShowSlice.reducer;
