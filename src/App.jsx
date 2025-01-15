import { useState } from 'react'
import './App.css'
import Bottles from './componnts/Bottles/Bottles'
import Buys from './componnts/Buys/Buys'


function App() {

  const [buys, setBuys] = useState([]);

  const handleBuyBtn = (bottle) => {
    // console.log(bottle);
    const newBuys = [...buys, bottle];
    setBuys(newBuys);
  }

  return (
    <>
      <Bottles handleBuyBtn={handleBuyBtn} ></Bottles>

      <Buys buys={buys} ></Buys>

      
    </>
  )
}

export default App
