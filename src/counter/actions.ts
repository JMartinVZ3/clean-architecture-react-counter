

import { createAction } from '@reduxjs/toolkit';

export const Increment = createAction('counter/increment');

export const Decrement = createAction('counter/decrement');

export const IncrementByAmount = createAction<number>('counter/incrementByAmount');
