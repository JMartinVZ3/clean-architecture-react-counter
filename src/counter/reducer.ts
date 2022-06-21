import { createReducer } from '@reduxjs/toolkit';
import { Counter, incrementBy } from '../domain/counter';
import { 
    Increment, 
    Decrement, 
 } from './actions';

type CounterState = {
  data: Counter;
};

const initialState: CounterState = {
  data: {value: 0},
};

export const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(Increment, state => {
      state.data = incrementBy(state.data, 1);
    })
    .addCase(Decrement, state => {
      state.data = incrementBy(state.data, -1);
    });
});
