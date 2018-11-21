import React from 'react'

const ProductRow = (props) => {
  const { stocked, name, price } = props.product
  return (
    <div className="row">
      <span className={stocked ? '' : 'empty'}>{name}</span>
      <span>{price}</span>
    </div>
  )
}

export default ProductRow