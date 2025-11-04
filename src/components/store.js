import { configureStore } from "@reduxjs/toolkit";
import boxReducer from "../components/boxSlice";

const store = configureStore({
  reducer: {
    storebox: boxReducer,
  },
});

export default store;
