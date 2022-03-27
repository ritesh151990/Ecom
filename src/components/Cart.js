import React, { useContext } from 'react';
import './Cart.css';
import CartContext from './CartContext';
import CartItems from './CartItems';

  


  
  const Cart = (props) => {
    const cartCntxt = useContext(CartContext);
     console.log(cartCntxt.items);
      const cartList = cartCntxt.items.map((list) => 
     
      <CartItems
          key={list.id}
          item={list.title} img={list.imageUrl} 
          
      price={list.price}  quantity={list.quantity}/>
      );
      return (
       
          <div className="cart">
            <h3 className="cartName">
              Cart
              <button className="btn btn-primary X" onClick={props.onClick}>
                X
              </button>
            </h3>
            <div className="container">
              <div className="row Header">
                <div className="col">
                  <span>Item</span>
                </div>
                <div className="col">
                  <span>Price</span>
                </div>
                <div className="col">
                  <span>Amount</span>
                </div>
                <div className="col">
                  Remove
                </div>
              </div>
            </div>
            {cartList}
          </div>
  
      );
  };
  export default Cart;