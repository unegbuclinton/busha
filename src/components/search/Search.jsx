import React from 'react'
import { SearchIcon } from '../../assets/icons/Search.jsx'

const Search = () => {
  return (
    <div className='flex-1 ml-2 flex items-center rounded-md bg-light-grey px-3 py-1 h-[30px]'>
      <SearchIcon />
      <input
        className='w-full bg-transparent outline-none pl-2'
        placeholder='Search'
      />
    </div>
  )
}

export default Search
