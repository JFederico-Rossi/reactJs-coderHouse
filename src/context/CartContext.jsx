/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({ cart: [], updateCart: () => {}, updateQuantityAndTotalPrice: () => {},});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [totalQuantity, setTotalQuantity] = useState(0); 

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    const newTotalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
  };

  const addItem = (item, name, quantity) => {
    const existingItemIndex = cart.findIndex((prod) => prod.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity); 
  };

  const removeItem = (itemId) => {
    const itemToRemove = cart.find((item) => item.id === itemId);
    if (itemToRemove) {
      const newTotalQuantity = totalQuantity - itemToRemove.quantity;
      console.log("newTotalQuantity", newTotalQuantity); 
      setTotalQuantity(newTotalQuantity);
      const cartUpdated = cart.filter((prod) => prod.id !== itemId);
      setCart(cartUpdated);
    }
  };
  

  const emptyCart = () => {
    setCart([]);
    setTotalQuantity(0); 
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const getTotalItemsQuantity = () => {
      let i = 0

      cart.forEach(prod => {
        i += prod.quantity
      })

      return i
    }

    const totalItemsQuantity = getTotalItemsQuantity()

    const getTotal = () => {
      let i = 0

      cart.forEach(prod => {
        i += prod.quantity * prod.price
      })

      return i
    }

    const total = getTotal()

    const getSubtotal = (quantity, price) => {
      return quantity* price
    }
    const updateQuantityAndTotalPrice = (itemId, newQuantity) => {
      const updatedCart = cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      updateCart(updatedCart);
    };

  return (
    <CartContext.Provider
      value={{ cart, updateCart,setCart, addItem, emptyCart, removeItem, totalQuantity, total, getSubtotal, updateQuantityAndTotalPrice, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
