/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-06-20 15:44:15
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-06-20 16:49:01
 */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { incrementAsync } from './thunks';

export type CounterSliceState = { value: number; status: 'idle' | 'loading' | 'failed' };
const initialState: CounterSliceState = {
    value: 0,
    status: 'idle'
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(incrementAsync.pending, state => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                // console.log(action.payload);
                state.value += action.payload;
            });
    }
});
