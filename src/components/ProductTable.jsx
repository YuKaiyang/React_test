import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const ProductTable = (props) => {
  const filterText = props.filterText
  const inStockOnly = props.inStockOnly
  const rows = []
  let lastCategory = null

  props.products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return
    }
    if (inStockOnly && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      )
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    )
    lastCategory = product.category
  })

  return (
    <div className="table">
      <div className="category">
        <span >Name</span>
        <span >Price</span>
      </div>
      {rows}
    </div>
  )
}

export default ProductTable