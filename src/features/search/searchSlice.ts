import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: 'javascript',
  categories: '',
  sorting: 'relevance',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setSorting: (state, action) => {
      state.sorting = action.payload
    },
  },
})

export const { setQuery } = searchSlice.actions
export const { setCategories } = searchSlice.actions
export const { setSorting } = searchSlice.actions
export default searchSlice.reducer
