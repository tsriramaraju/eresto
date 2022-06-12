import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem } from "interfaces/";
import { checkStorage, clearStorage, persistStorage } from "utils/localStorage";

const initialState: Cart = {
  finalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const itemIndex = state.items.findIndex((i) => i.name === item.name);
      if (itemIndex === -1) {
        state.items.push(item);
      } else {
        state.items[itemIndex].quantity += item.quantity;
      }
      state.finalPrice = state.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      return state;
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const itemIndex = state.items.findIndex((i) => i.name === item.name);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
      state.finalPrice = state.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      return state;
    },
    clearCart: () => initialState,
    updateItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const itemIndex = state.items.findIndex((i) => i.name === item.name);
      if (itemIndex === -1) {
        state.items.push(item);
      } else {
        state.items[itemIndex] = item;
      }
      state.finalPrice = state.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      return state;
    },
  },
});

export const { addItem, removeItem, clearCart, updateItem } = cartSlice.actions;

export default cartSlice.reducer;
