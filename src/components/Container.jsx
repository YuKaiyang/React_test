import React from 'react'
import SearchBar from './SearchBar'

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
      input: e.target.value
    })
  }

  handleClick(e) {
    this.setState({
      checked: e.target.checked
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
      </div>
    )
  }
}

export default Container