import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  projects: [],
  status: "idle",
  error: null,
};

export const getAllMyProjects = createAsyncThunk(
  "projects/getAllProjects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/project/allProjects`
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
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
        state.error = null;
      })
      .addCase(getAllMyProjects.fulfilled, (state, action) => {
        state.status = "success";
        state.projects = action.payload;
        state.error = null;
      })
      .addCase(getAllMyProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch projects";
      });
  },
});

export default projectsSlice.reducer;
