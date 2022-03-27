import React ,{useState} from "react";
import CartContext from "./CartContext";


const CartProvider =(props) =>{
  const [items, updateItems]= useState([]);
 
    const addItemToCartHandler= (item) =>{
        
        let hasItem=false;
        const newItemArray=[ ...items];
        newItemArray.forEach((element,index )=> {
            if(item.id===element.id){
                console.log(newItemArray[index])
            hasItem=true;
            newItemArray[index].quantity=newItemArray[index].quantity+1;
            }})
            if(hasItem===false)
            updateItems([...items,item]);
            else
            updateItems(newItemArray);
    
        }
    const removeItemFromCartHandler=(id) =>{
        
    };
    
    const cartContext ={
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        
    };
    return  <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    
};

export default CartProvider;