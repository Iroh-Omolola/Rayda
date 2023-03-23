import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<void, void>({
      query: () => 'v3/7f02819f-8254-410a-b8af-ab98572bd26b',
    }),
  }),
})
// Export hooks for usage in functional components
export const { useGetProductsQuery } = productApi
