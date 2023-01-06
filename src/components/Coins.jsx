import React from 'react'
import CoinItem from './CoinItem'
import { Link } from 'react-router-dom'

import './coins.css'
import Coin from '../pages/Coin'

function Coins({coins}) {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Market Cap</p>
            </div>
            {coins.map(coins =>{
                return(
                    <Link to = {`/coin/${coins.id}`} element = {<Coin/>} key = {coins.id}>
                    <CoinItem coins={coins} />
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Coins