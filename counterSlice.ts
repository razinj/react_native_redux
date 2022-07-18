import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

type CounterState = {
  counterValue: number;
};

const initialState: CounterState = {
  counterValue: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state: CounterState) => {
      state.counterValue = state.counterValue + 1;
    },
    subtract: (state: CounterState) => {
      state.counterValue = state.counterValue - 1;
    },
  },
});

export const {add, subtract} = counterSlice.actions;

export const selectCounterValue = (state: RootState) => state.counter.counterValue;

export default counterSlice.reducer;
