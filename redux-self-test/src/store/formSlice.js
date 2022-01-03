import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { data: [] },
  reducers: {
    submitHandler(state, action) {
      state.data = [...state.data, action.payload];
    },
  },
});
export const formAction = formSlice.actions;
export default formSlice;
