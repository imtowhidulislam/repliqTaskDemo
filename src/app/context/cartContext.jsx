"use client"
import React, { createContext, useState } from 'react'
const CartContextProvider = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [user,setUser] = useState([]);
    const [newProduct, setNewProduct] = useState([]);
  return (
    <CartContextProvider.Provider value={{product:[newProduct,setNewProduct],user:[user,setUser],cart:[cart, setCart]}}>
        {children}
    </CartContextProvider.Provider>
  )
}

export default CartContextProvider;
