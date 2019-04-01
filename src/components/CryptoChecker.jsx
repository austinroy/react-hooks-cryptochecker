import React, { useState, useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'

const coinAPIKey = process.env.REACT_APP_COIN_API_KEY

const CryptoChecker = () => {

  const [coinName, setCoinName] = useState(null)
  const coinUrl = `https://rest.coinapi.io/v1/exchangerate/${coinName}/USD`

  const useCryptoFetcher = () => {
    const [coinData, setCoinData] = useState(null)
    const [fetched, setFetched] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      fetch(coinUrl,{
        headers: {
          "X-CoinAPI-Key": coinAPIKey
        }
      }).then(res => {
        if(!coinUrl){
          setFetched(false)
          return null
        }
        if(!res.ok){
          setFetched(false)
          return null
        }
        else {
          return res.json()
        }
      }).then( data => {
        setLoading(false)
        setFetched(true)
        setCoinData(data)
      }
      )
    }, [coinUrl])
   return ([coinData, loading, fetched])
  }

  const mapCoinData = () => {
    if(!fetched) return <div>No data fetched</div>
    if(loading) return <div>Loading...</div>
    if(!coinData){
      return <div>No Coin Data</div>
    } else {
      return (
        <div>
          <h1>{coinName}</h1>
          <div>{coinData.rate} USD</div>
        </div>
      )
    }
  }

  const [ coinData, loading, fetched ]  = useCryptoFetcher();
  const coinOptions = [
    {
      key: 'BTC',
      value: 'BTC',
      text: 'Bitcoin'
    },
    {
      key: 'ETH',
      value: 'ETH',
      text: 'Ethereum'
    }
  ]

  return(
    <div>
        <Dropdown
        placeholder='Select Coin'
        clearable
        selection
        options={coinOptions}
        onChange={ (e, {value}) => setCoinName(value)}
      />
      <br/>
      {mapCoinData()}
    </div>
  )
}

export default CryptoChecker;
