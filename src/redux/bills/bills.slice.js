import { createSlice } from '@reduxjs/toolkit';
import { fetchBills, addBill, updateStatusBill } from './bills.operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const billsSlice = createSlice({
  name: 'bills',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchBills.pending, handlePending)
      .addCase(fetchBills.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchBills.rejected, handleRejected)

      .addCase(addBill.pending, handlePending)
      .addCase(addBill.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addBill.rejected, handleRejected)
      .addCase(updateStatusBill.pending, handlePending)
      .addCase(updateStatusBill.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(bill => bill.id === action.payload);
        state.items.splice(index, 1, action.payload);
      })
      .addCase(updateStatusBill.rejected, handleRejected);
  },
});

export const billssReducer = billsSlice.reducer;
