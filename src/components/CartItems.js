import React from 'react';
import './CartItem.css';

const CartItems = (props) => {
    const imgsrc = props.img;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <span>{props.item}</span>
          <img src={imgsrc} alt="products" className="i"/>
        </div>
        <div className="col">
          <span>{props.price}</span>
        </div>
        <div className="col">
          <span>{props.quantity}</span>
        </div>
        <div className="col">
        <button className='btn btn-danger remove'>Remove</button>
        </div>
      </div>
      
    </div>
  );
};

export default CartItems;