import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSubNav: {
    id: "1",
    icon: "fa-solid fa-user-group",
    text: "About us",
    desc: "Learn about our story and our mission statement.",
    path: "/about-us",
  },
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
