// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })

// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >
import { configureStore } from '@reduxjs/toolkit'
import searchSlice from '../features/search/searchSlice'
import { apiSlice } from '../features/api/apiSlice'

export const store = configureStore({
  reducer: {
    search: searchSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>
