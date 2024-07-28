import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppSlice"; // Ensure the correct path
import ChatSlice from "./ChatSlice"
const store = configureStore({
  reducer: {
    app: appReducer,
    chat: ChatSlice,
  },
});

export default store; // Ensure this is a default export
// Ensure this is a default export
