import { configureStore } from "@reduxjs/toolkit";
import createVideoModelReducer from "../features/createVideoModelSlice";
import alertModelReducer from "../features/alertModelSlice";
import authModelReducer from "../features/authModelSlice";

export const store = configureStore({
  reducer: {
    createVideoModelReducer,
    alertModelReducer,
    authModelReducer,
  },
});
