import React from 'react'

const ProductRow = (props) => {
  return (
    <div className="row">
      <span className={props.stocked ? '' : 'empty'}>{props.name}</span>
      <span>{props.price}</span>
    </div>
  )
}

export default ProductRow