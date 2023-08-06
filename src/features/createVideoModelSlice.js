import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const createVideoModelSlice = createSlice({
  name: 'CREATE_VIDEO_MODEL',
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export const { open, close } = createVideoModelSlice.actions;
export default createVideoModelSlice.reducer;