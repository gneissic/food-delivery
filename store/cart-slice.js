import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  deliveryFee: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    onAddToCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      if (!exisitingItem) {
        state.totalAmount = state.totalAmount + newItem.price;
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          general: newItem.general,
        });
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice + exisitingItem.price;
        state.totalAmount = state.totalAmount + exisitingItem.price;
      }
    },
    onRemoveFromCart(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      if (exisitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount = state.totalAmount - exisitingItem.price;
      } else {
        exisitingItem.quantity--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
        state.totalAmount = state.totalAmount - exisitingItem.price;
      }
    },
    onClearCart(state) {
      state.items = [];
      state.deliveryFee = 0;
      state.subtotal = 0;
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    onRemoveSingleItem(state, action) {
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      state.totalAmount = state.totalAmount - exisitingItem.totalPrice;
      state.totalQuantity = state.totalQuantity - exisitingItem.quantity;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
