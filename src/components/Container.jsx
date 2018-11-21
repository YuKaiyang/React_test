import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const title = ['Name', 'Price']
const category = ["Sporting Goods", 'Electronics']
const data = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
]

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      checked: false,
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value.toLowerCase()
    })
  }

  handleClick(e) {
    this.setState({
      checked: e.target.checked
    })
  }

  renderList(category) {
    const { input, checked } = this.state
    let lists = [...data]

    if (input) {
      lists = data.filter(v => {
        return v.name.toLowerCase().match(input)
      })
    }
    if (checked) {
      lists = lists.filter(v => {
        return v.stocked === checked
      })
    }
    lists = lists.filter(v => {
      return v.category === category
    })
    return lists.map(v => {
      return <ProductRow key={v.name} name={v.name} price={v.price} stocked={v.stocked} />
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          input={this.state.input} handleChange={this.handleChange.bind(this)}
          checked={this.state.checked} handleClick={this.handleClick.bind(this)}
        >
          Only show products in stock
        </SearchBar>
        <ProductTable title={title} >
          <ProductCategoryRow title={category[0]} />
          {this.renderList(category[0])}
          <ProductCategoryRow title={category[1]} />
          {this.renderList(category[1])}
        </ProductTable>
      </div>
    )
  }
}

export default Container