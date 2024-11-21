import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import userSlice from "./slices/userSlice";
import projectsSlice from "./slices/projectsSlice";

export const store = configureStore({
  reducer: {
    language: languageSlice,
    user: userSlice,
    projects: projectsSlice,
  },
});
