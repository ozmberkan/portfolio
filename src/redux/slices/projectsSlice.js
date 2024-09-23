import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: JSON.parse(localStorage.getItem("projects")) || [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
      localStorage.setItem("projects", JSON.stringify(action.payload));
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
