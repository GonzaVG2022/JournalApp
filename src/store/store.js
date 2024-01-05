import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})