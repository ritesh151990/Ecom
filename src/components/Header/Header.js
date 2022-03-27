import React, { Fragment,useContext } from 'react';
import CartContext from '../CartContext';

import './header.css';

const Header = (props) => {
  let total=0;
  const cartCntxt = useContext(CartContext);
     cartCntxt.items.forEach(element => {
       total+=element.quantity;
       
     });;
      console.log(total)
    
  return (
    <Fragment>
      <div className="up">
        <h3 className="h3">
          <a className="a" href=" ">
            HOME
          </a>
          <a className="a" href=" ">
            STORE
          </a>
          <a className="a" href=" ">
            ABOUT
          </a>
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