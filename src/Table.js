import React from 'react'

export default function Table({image, name, symbol, price, volume, priceChange, marketcap}) {
    return (
        <div className = 'table-container'>
            <div className='table-row'>
                <div className='table-coin'>
                    <img src={image} alt = "CryptoImage"></img>
                    <h1>{name}</h1>
                    <p className = 'coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>{price.toLocaleString()} inr</p>
                    <p className='coin-volume'>{volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                    )}
                    <p className='coin-marketCap'>Mkt Cap inr {marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}
