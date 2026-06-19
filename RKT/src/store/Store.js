import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import userReducers from "./features/users/userSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducers,
  },
});

export default store;
