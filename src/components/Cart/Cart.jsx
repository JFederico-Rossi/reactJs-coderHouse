/* eslint-disable no-unused-vars */
import "./Cart.css";
import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const { cart, emptyCart, totalQuantity, updateCart, total, updateTotalPrice} =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h2> No items in cart! </h2>
        <Link to="/" style={{ margin: "0 45%" }}>
          <button> View all products </button>
        </Link>
      </div>
    );
  }

  const handleSubtotalChange = (id, newSubtotal) => {
    updateTotalPrice(id, newSubtotal);
  };

  return (
    <section>
      <h2>Your Cart</h2>
      {cart.length > 0 && (
        <>
          {cart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
        </>
      )}

      <div className="checkoutDiv">
        <h3> Total: $ {total} </h3>
        <div style={{display: "flex", flexDirection: 'row', gap: 10, alignItems: 'end', margin: '50px 30%'}}>
        <Link to="/checkout">
          {" "}
          <button style={{backgroundColor: 'rgba(94, 94, 235, 0.205)'}}>Checkout </button>
        </Link>
        <button style={{backgroundColor: 'rgba(205, 134, 63, 0.554)'}} onClick={() => emptyCart()}>
          Clear Cart
        </button>
        <Link to={"/"} className="linkNav">
          <button>Continue Shopping</button>
        </Link>
        </div>
      </div>
    </section>
  );
}