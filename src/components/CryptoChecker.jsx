import React, { useState, useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'

const CryptoChecker = () => {

  const [coinName, setCoinName] = useState(null)
  const coinUrl = `https://rest.coinapi.io/v1/exchangerate/${coinName}/USD`

  const useCryptoFetcher = (coinName) => {
    console.log(coinName)
    const [coinData, setCoinData] = useState(null)

    useEffect(() => {
      fetch(coinUrl,{
        headers: {
          "X-CoinAPI-Key": '69B5A8E0-ABB5-41EC-A423-18C87EA8B9E0'
        }
      }).then(res => {
        if(!coinUrl){
          return null
        }
        if(!res.ok){
          return null
        }
        else {
          return res.json()
        }
      }).then( data => setCoinData(data))
    }, [coinUrl])
   return (coinData)
  }

  const mapCoinData = (data) => {
    if(!data){
      return <div>No Coin Data</div>
    } else {
      console.log(data)
      return (
        <div>
          <h1>{coinName}</h1>
          <div>{data.rate} USD</div>
        </div>
      )
    }
  }

  const coinData = useCryptoFetcher();
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


  console.log(coinData);
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
      {mapCoinData(coinData)}
    </div>
  )
}

export default CryptoChecker;