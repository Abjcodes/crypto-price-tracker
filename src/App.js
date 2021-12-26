import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Table from './Table';

export default function App() {

  const[coins, setCoins] = useState([]);
  const[search,setSearch] = useState('');


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error))
  }, []);

const handleChange = e => {
  setSearch(e.target.value)
}

const fileteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <div className = "coins-search">
        <h1 className = "header">Crypto Price Tracker</h1>
        <form>
          <input type = "text" placeholder='Search' className = 'coin-input' onChange={handleChange}></input> 
        </form>
      </div>
      {fileteredCoins.map(coin => {
        return <Table key = {coin.id} 
        name = {coin.name} 
        image = {coin.image}
        symbol = {coin.symbol}
        volume = {coin.total_volume}
        price = {coin.current_price}
        priceChange = {coin.price_change_percentage_24h}
        marketcap={coin.market_cap}/>;
      })}
    </div>
  );
}

