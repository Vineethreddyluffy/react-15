import {Component} from 'react'

import DestinationItems from './index2'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    const searchVal = event.target.value
    this.setState({searchInput: searchVal})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="cont">
        <h1 className="heading">Destination Search</h1>
        <div className="icon-cont">
          <input
            type="search"
            placeholder="search"
            onChange={this.onChangeSearch}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>
        <ul className="card-cont">
          {searchResults.map(each => (
            <DestinationItems List={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
