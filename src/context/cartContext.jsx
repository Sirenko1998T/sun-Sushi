import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {

   let [cart, setCart] = useState([]);
   let [quantity, setQuantity] = useState({});
   let totalQuantity = Object.values(quantity).reduce((acc, i) => acc + i, 0);

   let increaseQuantity = (id) => {
      setQuantity(prev => ({
         ...prev,
         [id]: (prev[id] || 0) + 1
      }))
   }
   let reduceQuantity = (id) => {
      setQuantity(prev => ({
         ...prev,
         [id]: (prev[id] || 0) - 1
      }))
   }
   let addToCart = (productId, products) => {
      setCart(prev => {
         let item = products.find((i) => i.id === productId)
         return [...prev, { ...item, quantity: 1 }]
      })
      setQuantity(prev => ({
         ...prev,
         [productId]: (prev[productId] || 0) + 1
      }))
   }
   let value = { cart, addToCart, quantity, increaseQuantity, reduceQuantity, totalQuantity };
   return (
      <CartContext.Provider value={value}>
         {children}
      </CartContext.Provider>
   )
}