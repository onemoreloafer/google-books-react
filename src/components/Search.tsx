import React from 'react'
import { useDispatch } from 'react-redux'
import {
  setQuery,
  setCategories,
  setSorting,
} from '../features/search/searchSlice'

const Search = () => {
  const dispatch = useDispatch()

  return (
    <div className='flex justify-center items-center mb-10 '>
      <h1 className='text-2xl text-green-900 font-medium'> Search for books</h1>

      <input
        className='text-red-700 border-stone-300 bg-white rounded-xl w-1/4 p-2 mx-2 '
        type='text'
        placeholder='введите название книги'
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />

      <div className='text-md bg-white rounded-xl w-1/7 p-1 hover:bg-green-200'>
        Categories
        <select
          className='mx-1'
          onChange={(e) => dispatch(setCategories(e.target.value))}
        >
          <option value=''>all</option>
          <option value='art'>art</option>
          <option value='biography'>biography</option>
          <option value='computer'>computer</option>
          <option value='history'>history</option>
          <option value='medical'>medical</option>
          <option value='poetry'>poetry</option>
        </select>
      </div>

      <div className='text-md bg-white rounded-xl w-1/7 p-1 hover:bg-green-200'>
        Sorting by
        <select
          className='mx-1'
          onChange={(e) => dispatch(setSorting(e.target.value))}
        >
          <option value='relevance'>relevance</option>
          <option value='newest'>newest</option>
        </select>
      </div>
    </div>
  )
}

export default Search
