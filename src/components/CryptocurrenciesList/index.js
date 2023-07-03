// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)

    const updatedData = data.map(eachCurrencyItem => ({
      currencyLogo: eachCurrencyItem.currency_logo,
      currencyName: eachCurrencyItem.currency_name,
      euroValue: eachCurrencyItem.euro_value,
      id: eachCurrencyItem.id,
      usdValue: eachCurrencyItem.usd_value,
    }))

    this.setState({cryptocurrencyData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptocurrencyData} = this.state

    return (
      <div className="container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptocurrency-image"
            />
            <ul className="cryptocurrency-items-container">
              <li className="table-header">
                <p className="first-column">Coin Type</p>
                <p className="second-column">USD</p>
                <p className="third-column">EURO</p>
              </li>
              {cryptocurrencyData.map(eachCurrencyItem => (
                <CryptocurrencyItem
                  key={eachCurrencyItem.id}
                  cryptocurrency={eachCurrencyItem}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
