import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  loading: false,
  error: null,
};

const fechUsers = createAsyncThunk("user/fechUsers", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await data.json();
  console.log(result);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (addBuilder) => {
    addBuilder.addCase(fechUsers.pending, (state, actions) => {
      state.loading = true;
      state.error = null;
    });
    addBuilder.addCase(fechUsers.fulfilled, (state, actions) => {
      state.loading = false;
    });
    addBuilder.addCase(fechUsers.rejected, (state, actions) => {
      state.loading = false;
      state.error = actions.error.message;
    });
  },
});

export const { feachUser } = userSlice.actions;
export { fechUsers };
export default userSlice.reducer;
