/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-06-20 15:13:13
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-06-20 16:50:19
 */

import { counterSlice } from './counter-slice';
import { createAppAsyncThunk } from './create-app-async-thunk';
import { selectCount } from './selectors';
import { ReduxThunkAction } from './store';

const fetchIdentityCount = async (amount = 1): Promise<{ data: number }> => {
    // console.log('request', process.env.NEXT_PUBLIC_HOME);
    const response = await fetch(process.env.NEXT_PUBLIC_HOME! + `?counter=${amount}`);
    const result = await response.json();
    return result;
};

export const incrementAsync = createAppAsyncThunk('counter/fetchIdentityCount', async (amount: number) => {
    const response = await fetchIdentityCount(amount);
    return response.data;
});

export const incrementIfOddAsync =
    (amount: number): ReduxThunkAction =>
    (dispatch, getState) => {
        const currentValue = selectCount(getState());

        if (currentValue % 2 === 1) {
            dispatch(counterSlice.actions.incrementByAmount(amount));
        }
    };
