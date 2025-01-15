import { useState } from 'react'
import './App.css'
import Bottles from './componnts/Bottles/Bottles'
import Buys from './componnts/Buys/Buys'
// import { addToLS, getStroedCart  } from './utilities/localStroage';
// import Watchs from './componnts/Watchs/Watchs';


function App() {

  const [buys, setBuys] = useState([]);

  const handleBuyBtn = (bottle) => {
    // console.log(bottle);
    const newBuys = [...buys, bottle];
    setBuys(newBuys);
    // addToLS(bottle.id);
  }


      // const saveCart = [];
      // useEffect( ()=>{
      //     if (bottles.length > 0) {
      //         const storedCart = getStroedCart();
      //         // console.log(storedCart);
      //         for (const id of storedCart) {
      //             console.log(id);
      //             const bottle = bottles.find(bottle => bottle.id === id)
      //             if (bottle) {
      //                 saveCart.push(bottle);
      //             }
      //         }
      //     }
      //     console.log(saveCart)
      // } ,[])


  return (
    <>
      <Bottles handleBuyBtn={handleBuyBtn} ></Bottles>

      <Buys buys={buys} ></Buys>

      
    </>
  )
}

export default App
