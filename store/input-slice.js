import { createSlice } from "@reduxjs/toolkit";
const initialInputState = { showForm: false };
const inputSlice = createSlice({
  name: "input",
  initialState: initialInputState,
  reducers: {
    showFormHandler(state) {
      state.showForm = true;
    },
    onHideForm(state) {
      state.showForm = false;
    },
  },
});
export const inputActions = inputSlice.actions;
export default inputSlice;
