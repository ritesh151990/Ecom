import React, { Fragment,useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
      <div className="up">
        <h3 className="h3">
          <NavLink className="a" to="/home">
            HOME
          </NavLink>
          <NavLink className="a" to="/store">
            STORE
          </NavLink>
          <NavLink className="a" to="/about">
            ABOUT
          </NavLink>
          <NavLink className="a" to="/contactus">
            CONTACT US
          </NavLink>
          <button className="butt" onClick={props.Cart}>Cart({total})</button>
        </h3>
      </div>
      <div className="down">
        <h1 className="h1">The Generics</h1>
      </div>
    </Fragment>
  );
};

export default Header;