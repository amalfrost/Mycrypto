import axios from "axios";
import { useParams,  } from "react-router-dom";
import React, { useEffect, useState } from "react";



import "./coin.css";

function Coin() {
  const params = useParams();
  // console.log(params);

  const [coin, setCoin] = useState({});

  const uri = `https://api.coingecko.com/api/v3/coins/${params.coinid}`;

  useEffect(() => {
    axios.get(uri).then((res) => {
        setCoin(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[uri]);

  let description =  coin.description&&coin.description.en

  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1> {coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image && <img src={coin.image.small} alt="img" />}
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div className="coin-price">
             { coin.market_data?.current_price? <h1>{coin.market_data.current_price.usd}</h1>: null}
            </div>
          </div>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {coin.market_data?.price_change_percentage_1h_in_currency &&<td>
                  {coin.market_data.price_change_percentage_1h_in_currency.usd}
                </td>}
                {coin.market_data?.price_change_percentage_24h_in_currency &&<td>
                  {coin.market_data.price_change_percentage_24h_in_currency.usd}
                </td>}
                {coin.market_data?.price_change_percentage_7d_in_currency &&<td>
                  {coin.market_data.price_change_percentage_7d_in_currency.usd}
                </td>}
                {coin.market_data?.price_change_percentage_14d_in_currency &&<td>
                  {coin.market_data.price_change_percentage_14d_in_currency.usd}
                </td>}
                {coin.market_data?.price_change_percentage_30d_in_currency &&<td>
                  {coin.market_data.price_change_percentage_30d_in_currency.usd}
                </td>}
                {coin.market_data?.price_change_percentage_1y_in_currency &&<td>
                  {coin.market_data.price_change_percentage_1y_in_currency.usd}
                </td>}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h&&<p>{coin.market_data.low_24h.usd}</p>}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h&&<p>{coin.market_data.high_24h.usd}</p>}
              </div>
            </div>
            <div className="right">
            <div className="row">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap&&<p>{coin.market_data.market_cap.usd}</p>}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {coin.market_data&&<p>{coin.market_data.circulating_supply}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
            <div className="about">
                <h3>About</h3>
                
                
                {/* <p dangerouslySetInnerHTML={{
                    __html: (coin.description && coin.description.en)
                }}> </p> */}
                <p dangerouslySetInnerHTML={{__html: description}}/>

            </div>
        </div>


      </div>
    </div>
  );
}

export default Coin;

// https://api.coingecko.com/api/v3/coins/bitcoin
