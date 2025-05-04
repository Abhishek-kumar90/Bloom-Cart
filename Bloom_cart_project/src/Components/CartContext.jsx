
import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const [wishlist, setWishlist] = useState([]);

    const addToCart = (product) =>{
        setCart((prev) => [...prev, product]);
    };

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
          // Avoid duplicates
          if (prevWishlist.find(item => item.id === product.id)) return prevWishlist;
          return [...prevWishlist, product];
        });
      };


    return(
        <CartContext.Provider value={{cart, addToCart,wishlist, addToWishlist}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => useContext(CartContext);