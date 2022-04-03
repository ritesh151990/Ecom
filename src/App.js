import React, {useContext, useState}from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Cart from './components/Cart';
import AvailableProducts from './components/Products'
import './App.css';
import CartProvider from './components/CartProvider';
import About from './About';
import HomePage from './components/HomePage';
import ContactUS from './components/movies/ContactUs';
import ProductDetail from './ProductDetail';
import AuthPage from './AuthPage';
import MainHeader from './components/Header/MainHeader';
import UserProfile from './components/Profile/UserProfile';
import AuthContext from './components/Header/auth-context';

function App() {
const authCtx=useContext(AuthContext)
  
  const [cart, setCart] = useState(false);
  const hideCartHandler = () => {
    setCart(false);
  };
  const showCartHandler = () => {
    
    setCart(true);
  };
  return (
    
            
           <CartProvider>
              
             <MainHeader />
          
             <Route path='/auth'>
               <AuthPage />

             </Route>
           <Switch>
            
            
           {authCtx.isLoggedIn &&(  <Route path="/home">
           <HomePage />
         </Route>)}
         <Route path="/About">
         <About />
         </Route>
         <Route path="/contactus">
         <ContactUS />
         </Route>
         {authCtx.isLoggedIn &&( 
         <Route path="/store" exact >
         <Header Cart={showCartHandler} />
         {cart && <Cart onClick={hideCartHandler} />}
         <AvailableProducts />
         </Route>)}
         
         <Route path="/store/:productId"> 
         <ProductDetail />

         </Route>
         {authCtx.isLoggedIn &&( <Route path="/profile">
           <UserProfile />
         </Route>)}
         </Switch>
        
        </CartProvider>
        
  )
}

export default App;
