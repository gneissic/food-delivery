import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import inputSlice from "./input-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, input: inputSlice.reducer },
});
export default store;
