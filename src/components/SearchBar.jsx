import React from 'react'

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <input type='text' className="search" value={props.input} onChange={props.handleChange} placeholder='Search...' />
      <div>
        <input id='checkbox' type='checkbox' checked={props.checked} onChange={props.handleClick} />
        <label htmlFor='checkbox'>{props.children}</label>
      </div>
    </div>
  )
}

export default SearchBar