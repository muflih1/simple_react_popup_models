import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

const alertModelSlice = createSlice({
  name: 'ALERT_MODEL',
  initialState,
  reducers: {
    open(state) {
      state.isOpened = true;
    },
    close(state) {
      state.isOpened = false;
    },
  },
});

export const { open, close } = alertModelSlice.actions;
export default alertModelSlice.reducer;