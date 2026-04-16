import { useState } from 'react'


import Holding_Data from './Services/HoldingAPI';

function App() {


  return (
    <>



      <h1>Holding Data</h1>
      <ul>
        {Holding_Data.map((item, index) => (
          <li key={index}>
            <img src={item.logo} alt={item.coinName} width={30} />
            <strong>{item.coin}</strong> — {item.coinName}
            <br />
            Price: {item.currentPrice}
            <br />
            Holding: {item.totalHolding}
            <br />
            Avg Buy Price: {item.averageBuyPrice}
            <br />
            STCG Gain: {item.stcg.gain}
            <br />
            LTCG Gain: {item.ltcg.gain}
          </li>
        ))}
      </ul>

    </>
  )
}

export default App
