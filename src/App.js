import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'

import Coin from './pages/Coin'
import Footer from './components/Footer';

function App() {
  const [coins ,setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoins(response.data)
      // console.log(response.data[0]);
    }).catch((error)=>{
      console.log(error);
    })
  },[])
  return (

    < >
    <Navbar/>
    <Routes>

    <Route path='/' element={<Coins coins={coins}/>}/>
      <Route path='/coin' element={<Coin/>}>
      <Route path=':coinid' element = {<Coin/>}/>
      </Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
