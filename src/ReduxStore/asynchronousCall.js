import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Create an async thunk
export const fetchData = createAsyncThunk("fetchData", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error("Error fetching data");
  }
});


const asynchronousSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [fetchData.error]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    }
  },
});

export default asynchronousSlice.reducer;
