import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "./reducer/Reducers";

export const store = configureStore({
  reducer: {
    todoSlice,
  },
});
