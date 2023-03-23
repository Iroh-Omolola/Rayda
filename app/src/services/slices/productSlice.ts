import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://run.mocky.io/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<void, void>({
      query: () => 'v3/7f02819f-8254-410a-b8af-ab98572bd26b',
    }),
  }),
})
// console.log("wee", process.env.REACT_APP_API_URL )
// Export hooks for usage in functional components
export const { useGetProductsQuery } = productApi
