import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../../config/AxiosEnstanse";

// Get Employees
export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.get("/Employee");
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something Went Wrong");
    }
  },
);

// Post Employee
export const PostEmployee = createAsyncThunk(
  "employee/PostEmployee",
  async (Details, { rejectWithValue, dispatch }) => {
    try {
      const result = await api.post("/Employee", Details);

      // Refresh Employee List
      await dispatch(getEmployees());

      return result.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something Went Wrong");
    }
  },
);

// Delete Employee
export const DeleteEmployee = createAsyncThunk(
  "employee/DeleteEmployee",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const result = await api.delete(`/Employee/${id}`);

      // Refresh Employee List
      await dispatch(getEmployees());

      return result.id;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something Went Wrong");
    }
  },
);
export const UpdateEmployee = createAsyncThunk(
  "employee/UpdateEmployee",
  async ({ id, details }, { rejectWithValue, dispatch }) => {
    try {
      const result = await api.put(`/Employee/${id}`, details);

      await dispatch(getEmployees());

      return result.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something Went Wrong");
    }
  },
);
