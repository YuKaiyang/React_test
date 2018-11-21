import React from 'react'

const ProductTable = (props) => {
  return (
    <div className="table">
      <div className="category">
        {props.title.map((v, index) => {
          return <span key={index}>{v}</span>
        })}
      </div>
      {props.children}
    </div>
  )
}

export default ProductTable