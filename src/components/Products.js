import React from "react";

import ProductList from "./ProductList";
import './style.css';

const productsArr = [

    {
    id: 1,

    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
   
    quantity: 1,
    
    },
    
    {
    id : 2,
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 1,
    
    },
    
    {
    id: 3,
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    },
    
    {
    id: 4,
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 1
   
    },
    {
        id: "5",
        title: "T-shirt",
        price: 120,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
         quantity: 1,
      }
    
    ]
    const AvailableProducts=()=>{
        const productsList=productsArr.map(product=>(
        
          
            
            <ProductList
            
              id={product.id}
              key={product.id}
             title={product.title}
              img={product.imageUrl}
               price={product.price} 
               quantity={product.quantity}/>
            ));
            
    
        return(
            
         <div>
         <ul className="productContainer">{productsList}</ul>
         </div>
        
        )
    };
        
    export default AvailableProducts;
    
    


    