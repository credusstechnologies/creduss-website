"use client";
import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./features/global/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});
