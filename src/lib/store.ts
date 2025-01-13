/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-06-20 15:22:39
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-06-20 15:53:57
 */
import { ConfigureStoreOptions, ThunkAction, configureStore, Action } from '@reduxjs/toolkit';

import { useDispatch as useReduxDispatch, useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';

import { reducer } from './root-reducer';
import { middleware } from './middleware';

const configureStoreOptions: ConfigureStoreOptions = { reducer };

export const makeReduxStore = (options: ConfigureStoreOptions = configureStoreOptions) => {
    return configureStore(options);
};

export const reduxStore = configureStore({
    reducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(middleware as any);
    }
});

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, Action>;
