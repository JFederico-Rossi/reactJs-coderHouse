/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({ cart: [], updateCart: () => {}, });

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const [totalQuantity, setTotalQuantity] = useState(0); 

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    const newTotalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
  };

  const addItem = (item, name, quantity) => {
    !isInCart(item.id)
      ? setCart((prev) => [...prev, { ...item, quantity }])
      : console.error("Product already added");
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

  return (
    <CartContext.Provider
      value={{ cart, updateCart,setCart, addItem, emptyCart, removeItem, totalQuantity, total, getSubtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
