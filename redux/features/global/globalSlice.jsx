import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSubNav: null,
  showSubNav: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setActiveSubNav: (state, action) => {
      state.activeSubNav = action.payload;
    },

    setShowSubNav: (state) => {
      state.showSubNav = !state.showSubNav;
    },
  },
});

export default globalSlice.reducer;
export const { setActiveSubNav, setShowSubNav } = globalSlice.actions;
