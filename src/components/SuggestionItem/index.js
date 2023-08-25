// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchInfo} = props
  const {suggestion} = searchInfo

  const onClickUpdateSearchInput = () => {
    const {updateSearchInput} = props
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item" onClick={onClickUpdateSearchInput}>
      <p className="suggestion-text">{suggestion}</p>
      <img
        className="arrow-image"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow icon"
      />
    </li>
  )
}

export default SuggestionItem
