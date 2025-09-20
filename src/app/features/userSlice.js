import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthReady: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state, { payload }) => {
      state.user = null;
    },
    authReady: (state, { payload }) => {
      state.isAuthReady = true;
    },
  },
});
export const { logOut, login, authReady } = userSlice.actions;
export default userSlice.reducer;
