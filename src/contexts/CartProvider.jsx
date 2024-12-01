import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
         
            }
        });
        console.log(cart)
    };
    // useEffect(()=>{
    //     console.log("cartItem", cart)
    // },[cart])

  // Return the context provider with products, loading, and error states
  return (
    <CartContext.Provider value={{ cart, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};