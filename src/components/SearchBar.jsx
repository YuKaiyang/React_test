import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
      <input type='text' value={props.input} onChange={props.handleChange} placeholder='Search...' />
      <div>
        <input id='checkbox' type='checkbox' checked={props.checked} onChange={props.handleClick} />
        <label htmlFor='checkbox'>{props.children}</label>
      </div>
    </div>
  )
}

export default SearchBar