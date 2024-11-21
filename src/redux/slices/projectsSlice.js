import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  projects: [],
  status: "idle",
};

export const getAllMyProjects = createAsyncThunk(
  "projects/getAllProjects",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/project/allProjects"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMyProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllMyProjects.fulfilled, (state, action) => {
        state.status = "success";
        state.projects = action.payload;
      })
      .addCase(getAllMyProjects.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = projectsSlice.actions;

export default projectsSlice.reducer;
