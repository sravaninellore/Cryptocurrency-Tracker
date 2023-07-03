// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrency} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptocurrency

  return (
    <li className="currency-item">
      <div className="currency-logo-name first-column">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>
      <p className="second-column">{euroValue}</p>
      <p className="third-column">{usdValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
