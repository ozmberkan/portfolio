import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    language: languageSlice,
    user: userSlice,
  },
});
