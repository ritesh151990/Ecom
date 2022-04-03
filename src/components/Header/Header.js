import React, { Fragment,useContext } from 'react';

import CartContext from '../CartContext';

import './header.css';

const Header = (props) => {
  let total=0;
  const cartCntxt = useContext(CartContext);
     cartCntxt.items.forEach(element => {
       total+=element.quantity
       
     });;
      console.log(total)
    
  return (
    <Fragment>
    
      <button className="butt" onClick={props.Cart}>Cart({total})</button>
      
    </Fragment>
  );
};

export default Header;