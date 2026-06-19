import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "../store/features/popup/popup/PopupSlice";
import employeeReducer from "./Store/../features/popup/employees/employeeSlice/EmployeeSlice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    employee: employeeReducer,
  },
});
