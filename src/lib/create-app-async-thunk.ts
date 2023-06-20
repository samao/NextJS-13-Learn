/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-06-20 15:14:29
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-06-20 15:27:30
 */
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ReduxState, ReduxDispatch } from './store';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: ReduxState;
    dispatch: ReduxDispatch;
    rejectValue: string;
}>();
