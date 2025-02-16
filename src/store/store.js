import { configureStore } from "@reduxjs/toolkit";
import userData from "./userData";
import eventData from "./eventData";

const store = configureStore({
  reducer: {
    userData,
    eventData
  }
});

export default store;