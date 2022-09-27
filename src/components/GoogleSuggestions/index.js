// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  OnChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const onPress = (id, suggestion) => {
      this.setState({searchInput: suggestion})
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="googlePic"
          />
          <div className="searchCard">
            <div className="flex">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="searchIcon"
              />
              <input
                type="search"
                className="searchBox"
                placeholder="Search Google"
                onChange={this.OnChangeSearch}
                value={searchInput}
              />
            </div>
            <ul className="unorderList">
              {searchResults.map(eachList => (
                <SuggestionItem
                  eachList={eachList}
                  key={eachList.id}
                  onPress={onPress}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
