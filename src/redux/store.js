import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import projectsSlice from "./slices/projectsSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    projects: projectsSlice,
  },
});
