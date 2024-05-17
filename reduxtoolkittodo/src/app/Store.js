import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/TodoSlice'

export const Store = configureStore({
    reducer: todoReducer
})