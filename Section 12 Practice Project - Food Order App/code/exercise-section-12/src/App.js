import React,  {useState, Fragment} from "react";
import Header from './modules/layout/Header';
import Meals from "./modules/meal/Meals";
import Cart from "./modules/cart/Cart";
import {CartContextProvider} from "./store/cartContext";
function App() {

  const [ showCart, setShowCart] = useState(false);

  function showCartHandler(){
      setShowCart(true);
  }
  function diableShowCartHandler() {
      setShowCart(false);
  }


  return (
    <Fragment>
        <CartContextProvider>
            {showCart &&<Cart onClose={diableShowCartHandler}  />}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartContextProvider>
    </Fragment>
  );
}

export default App;
