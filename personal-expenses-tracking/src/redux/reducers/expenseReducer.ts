import { createSlice } from "@reduxjs/toolkit";

interface ExpenseState {
  maxAmount: number;
}

const initialState: ExpenseState = {
    maxAmount: 10000,
};


const exepenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
      increment(state) {
        state.maxAmount += 1;
      },
      decrement(state) {
        state.maxAmount -= 1;
      },
    },
  });
  
  export const { increment, decrement } = exepenseSlice.actions;
  
  export default exepenseSlice.reducer;