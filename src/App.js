import React, {useState}from 'react';
import Header from './components/Header/Header';
import Cart from './components/Cart';
import AvailableProducts from './components/Products'
import './App.css';

function App() {
  const [cart, setCart] = useState(false);
  const hideCartHandler = () => {
    setCart(false);
  };
  const showCartHandler = () => {
    setCart(true);
  };
  return (
    
        <div>
           <Header Cart={showCartHandler}/>
         <AvailableProducts />
         {cart && <Cart onClick={hideCartHandler} />}
        </div>
        
  );
}

export default App;
