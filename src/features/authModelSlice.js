import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
  tab: 'Sign in',
};

const authModelSlice = createSlice({
  name: "AUTH_MODEL",
  initialState,
  reducers: {
    changeTab(state, action) {
      state.tab = action.payload;
    },
    open(state, action) {
      state.isOpened = true;
      state.tab = action.payload;
    },
    close(state) {
      state.isOpened = false;
    },
  },
});

export const { open, close, changeTab } = authModelSlice.actions;
export default authModelSlice.reducer;