/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-06-20 15:35:01
 * @Last Modified by:   idzeir
 * @Last Modified time: 2023-06-20 15:35:01
 */
import { ReduxState } from './store';

export const selectCount = (state: ReduxState) => state.counter.value;
