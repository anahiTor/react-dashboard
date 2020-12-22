import React from 'react'

const SearchResults = ({name, phone, mail}) => {
  return(
    <div className='search-results'>
      <div className='name'>{name}</div>
      <div className='phone'>{phone}</div>
      <div className='mail'>{mail}</div>
    </div>
  )
}

export default SearchResults