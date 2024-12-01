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
        console.log("cart",cart)
    };

    // Increment quantity
  const increment = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity
  const decrement = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
    // const increment = (id) =>{
    //   const item = cart.find((item) => item.it === id);
    //   item.quantity += 1;
    //   console.log("cart", cart)
    // }

    // const decrement = (id) =>{
    //   const item = cart.find((item) => item.id === id);
    //   item.quantity -= 1;
    //   if(item.quantity != 0) return;
    //   setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    // }
    // useEffect(()=>{
    //     console.log("cartItem", cart)
    // },[cart])

  // Return the context provider with products, loading, and error states
  return (
    <CartContext.Provider value={{ cart, addToCart, increment, decrement}}>
      {children}
    </CartContext.Provider>
  );
};