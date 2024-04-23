/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css'

export default function CartItem({ id, name, quantity, price }) {
  const { updateQuantityAndTotalPrice, removeItem } = useContext(CartContext);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  
  useEffect(() => {
    updateQuantityAndTotalPrice(id, itemQuantity);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemQuantity]);

  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const deleteProduct = () => {
    removeItem(id);
  };

  return (
    <article className="cartCard">
      <h6>
        <strong>{name}</strong>
      </h6>
      <h6>
        Number of items: <strong>{itemQuantity}</strong>
      </h6>
      <h6> Unit Price: ${price} </h6>
      <h6 style={{ textAlign: "center" }}>
        {" "}
        Subtotal: <strong>$ {itemQuantity * price}</strong>{" "}
      </h6>
      <div>
        <button onClick={decreaseQuantity}>-</button>
        <button onClick={increaseQuantity}>+</button>
        <button onClick={deleteProduct}>Delete Product</button>
      </div>
    </article>
  );
}
