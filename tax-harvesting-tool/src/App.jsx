import { useEffect, useState } from 'react'


import { getHolding } from '../src/Services/HoldingAPI';
import { getCapital } from './Services/CapitalAPI';

function App() {

  const [holding, setHolding] = useState([]);
  const [capital, setCapital] = useState([]);

  useEffect(() => {

    // getHolding().then(data => {
    //   setHolding(data)
    // })

    getCapital().then(data => {
      setCapital(data);
    })
  }, [])

  return (
    <>



      <h1>Holding Data</h1>
      <ul>
        {holding.map((item, index) => (
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


      <ul>
        {capital.map((item, index) => {

          <li key={index}>
            <p>{item.capitalGains.stcg.profits}</p>
            <p>{item.capitalGains.stcg.profits}</p>


          </li>
        })}
      </ul>

    </>
  )
}

export default App
