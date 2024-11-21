import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: JSON.parse(localStorage.getItem("adminUserForBerkan")) || null,
  status: "idle",
};

export const loginService = createAsyncThunk("user/login", async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginService.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginService.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        localStorage.setItem(
          "adminUserForBerkan",
          JSON.stringify(action.payload)
        );
      })
      .addCase(loginService.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
