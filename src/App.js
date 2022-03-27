import React, {useState}from 'react';
import Header from './components/Header/Header';
import Cart from './components/Cart';
import AvailableProducts from './components/Products'
import './App.css';
import CartProvider from './components/CartProvider';

function App() {
  
  const [cart, setCart] = useState(false);
  const hideCartHandler = () => {
    setCart(false);
  };
  const showCartHandler = () => {
    
    setCart(true);
  };
  return (
    
        <CartProvider>
           <Header Cart={showCartHandler}/>
         <AvailableProducts />
         {cart && <Cart onClick={hideCartHandler} />}
        </CartProvider>
        
  );
}

export default App;
