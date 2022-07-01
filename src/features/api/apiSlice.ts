import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Root } from './apiSliceTypes'

const apiKey = process.env.REACT_APP_API_KEY

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/volumes?q=',
  }),
  endpoints: (build) => ({
    getVolumes: build.query<Root, string>({
      query: (search) => `${search}&key=${apiKey}`,
    }),
  }),
})

export const { useGetVolumesQuery } = apiSlice
