import React from "react";
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    const AvailableProducts=()=>{
        const productsList=productsArr.map(product=>(
            
           <div>
           {product.title}
        <img src={product.imageUrl}
         alt={product.title}
          width="300" height="300" />
             Rs.{product.price}
        </div>
            
        ));
        return(
         <ul>{productsList}</ul>
        )
    }
        
    export default AvailableProducts;
    
    


    