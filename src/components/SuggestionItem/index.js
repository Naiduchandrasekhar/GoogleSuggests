// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachList, onPress} = props
  const {suggestion, id} = eachList

  const onFunctionClick = () => {
    onPress(id, suggestion)
  }

  return (
    <li className="listItems">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onFunctionClick}
      />
    </li>
  )
}

export default SuggestionItem
