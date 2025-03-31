// store.js
import { configureStore } from "@reduxjs/toolkit";
import { personalApi } from "./personalApi";

export const store = configureStore({
  reducer: {
    [personalApi.reducerPath]: personalApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(personalApi.middleware),
});
