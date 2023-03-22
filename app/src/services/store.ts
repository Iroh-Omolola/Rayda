import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './slices/productSlice'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})