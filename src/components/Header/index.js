import './index.css'

const Header = props => {
  const {tabDetails, changeTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const className = isActive ? 'active-class' : 'normal-class'

  const onClickChangeTab = () => {
    changeTab(tabId)
  }
  return (
    <li className="tab-items">
      <button type="button" className={className} onClick={onClickChangeTab}>
        {displayText}
      </button>
    </li>
  )
}
export default Header
