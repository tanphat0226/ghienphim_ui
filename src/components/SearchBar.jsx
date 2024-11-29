import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const SearchBar = () => {
  const [query, setQuery] = useState('')

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  // const handleSearch = () => {
  //   // Implement search functionality here
  //   console.log('Searching for:', query)
  // }

  return (
    <div className='relative flex h-9 items-center focus-within:ring-coral-400 md:min-w-48'>
      <input
        data-input='search'
        type='text'
        value={query}
        onChange={handleInputChange}
        placeholder='Search...'
        className='hidden h-full w-full rounded-full bg-gray-500 px-3 py-2 text-base text-white placeholder:text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-coral-400 md:block'
      />
      <MagnifyingGlassIcon
        id='search-icon'
        className='h-7 w-7 text-gray-300 md:absolute md:right-2 md:top-2 md:h-5 md:w-5'
      />
    </div>
  )
}

export default SearchBar
