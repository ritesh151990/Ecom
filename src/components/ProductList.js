 import React,{ Fragment, useContext } from "react";
import CartContext from "./CartContext";
 import './style.css';
const ProductList = (props) => {

    const cartCntxt=useContext(CartContext);
    
    const addToCart=(event) =>{
        event.preventDefault();
       const a={
           id:props.id,
          
           title:props.title,
           imgsrc:props.img,
           price:props.price,
           quantity:props.quantity

       };
        cartCntxt.addItem(a)
    }
    
    

    const imgsrc = props.img;
    return (
        <Fragment>
            <ul className="products">
                <div>Title: {props.title}</div>
                <div>
                    <img src={imgsrc} alt="products" />
                </div>
                <div>Rs.{props.price} </div>
                
                <button className="add" onClick={addToCart} >Add To Cart</button>
            </ul>
        </Fragment>
    );
};

export default ProductList;
