import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getData } from '../http/getApi';

// 1. Create an async thunk to handle the API request
export const fetchEventData = createAsyncThunk(
  'eventdata/fetchEventData', 
  async (endpoint) => {
    try {
        const response = await axios.get(endpoint)
        return response.data
    } catch (error) {
      throw Error(error.message); // Error handling
    }
  }
);

const initialEventData = {
  data: null,
  loading: false,
  error: null,
};

const eventData = createSlice({
  name: 'eventdata',
  initialState: initialEventData,
  reducers: {
    // This reducer can still handle synchronous updates
    changeEventData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventData.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error before the API call starts
      })
      .addCase(fetchEventData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Update state with the fetched data
      })
      .addCase(fetchEventData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle error if the API call fails
      });
  }
});

export const { changeEventData } = eventData.actions;

export default eventData.reducer;
