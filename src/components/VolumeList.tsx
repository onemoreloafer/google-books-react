import React from 'react'
import { useSelector } from 'react-redux'
import { useGetVolumesQuery } from '../features/api/apiSlice'
import VolumeItem from './VolumeItem'

const VolumeList = () => {
  const query = useSelector((state: any) => state.search.query)
  const categories = useSelector((state: any) => state.search.categories)
  const sorting = useSelector((state: any) => state.search.sorting)

  const { data, isLoading, isFetching, isError } = useGetVolumesQuery(
    `${query}+subject:${categories}&orderBy=${sorting}`
  )
  if (isError)
    return (
      <div className='flex flex-wrap justify-between text-green-900 text-2xl'>
        An error has occurred!
      </div>
    )
  if (isLoading)
    return (
      <div className='flex flex-wrap justify-between text-green-900 text-2xl'>
        'Loading...'
      </div>
    )

  return (
    <div>
      {data ? (
        <div className='flex flex-wrap justify-between'>
          {data.items ? (
            data.items.map((volume: any) => (
              <VolumeItem key={volume.id} volume={volume} />
            ))
          ) : (
            <div className='flex flex-wrap justify-between text-green-900 text-2xl '>
              По вашему запросу нет подходящих книг
            </div>
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default VolumeList
