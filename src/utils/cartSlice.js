import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    Items: [],
  },
  reducers: {
    addItem: (state, actoion) => {
      state.Items.push(actoion.payload);
    },
    removeItem: (state) => {
      state.Items.pop();
    },
    clearItem: (state) => {
      state.Items.length === 0;
    },
  },
});
export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
