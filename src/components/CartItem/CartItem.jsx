/* eslint-disable react/prop-types */
import "./CartItem.css";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

export default function CartItem({ id, name, quantity, price, onQuantityChange, updateTotalPrice }) {
  
  const { addItem, emptyCart, getSubtotal } = useContext(CartContext);

  const [itemQuantity, setItemQuantity] = useState(quantity);
  // const [subtotal, setSubtotal] = useState(itemQuantity * price);


  const handleQuantityChange = (newQuantity) => {
    setItemQuantity(newQuantity);
    onQuantityChange(id, newQuantity);
  };

  // const getSubtotal = (itemQuantity, price) => {
  //   const subtotal = itemQuantity * price;
  //   setSubtotal(subtotal);
  //   return subtotal;
  // };

  const increaseQuantity = () => {
    addItem({ id, name, price }, name, 1);
    setItemQuantity(itemQuantity + 1);
    // getSubtotal(itemQuantity + 1, price);
  };

  const decreaseQuantity = () => {
    if (itemQuantity >= 2) {
      setItemQuantity(itemQuantity - 1);
      handleQuantityChange(itemQuantity - 1);
      // getSubtotal(itemQuantity - 1, price);
    } else {
      emptyCart();
    }
  };

  const subtotal = getSubtotal(itemQuantity, price)
  updateTotalPrice(subtotal);
  return (
    <>
      <article key={{ id }} className="cartCard">
        
        <h6>
          <strong>{name}</strong>
        </h6>
        <h6>
          Number of items: <strong>{itemQuantity}</strong>
        </h6>
        <h6> Unit Price: ${price} </h6>
        <h6 style={{ textAlign: "center" }}>
          {" "}
          Subtotal: <strong>$ {subtotal}</strong>{" "}
        </h6>
        <div>
          <button onClick={decreaseQuantity}>-</button>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </article>
      
    </>
  );
}
