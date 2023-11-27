// itemsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItem(state, action) {
      const { id, updatedItem } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        Object.assign(existingItem, updatedItem);
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = itemsSlice.actions;
export default itemsSlice.reducer;
