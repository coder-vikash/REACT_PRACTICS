import { createSlice } from "@reduxjs/toolkit";
import {
  getEmployees,
  PostEmployee,
  DeleteEmployee,
  UpdateEmployee,
} from "./EmployeeeThunk";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Get Employees
      .addCase(getEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })

      .addCase(getEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Post Employee
      .addCase(PostEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(PostEmployee.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(PostEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Delete Employee
      // Delete Employee
      .addCase(DeleteEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(DeleteEmployee.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(DeleteEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Update Employee
      .addCase(UpdateEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(UpdateEmployee.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(UpdateEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default employeeSlice.reducer;
