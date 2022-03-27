import React, {useState}from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Cart from './components/Cart';
import AvailableProducts from './components/Products'
import './App.css';
import CartProvider from './components/CartProvider';
import About from './About';
import HomePage from './components/HomePage';

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
           <Header Cart={showCartHandler} />
           <Route path="/home">
           <HomePage />
         </Route>
         <Route path="/About">
         <About />
         </Route>
         <Route path="/store" >
         <AvailableProducts />
         </Route>
         {cart && <Cart onClick={hideCartHandler} />}
        
        </CartProvider>
        
  )
}

export default App;
