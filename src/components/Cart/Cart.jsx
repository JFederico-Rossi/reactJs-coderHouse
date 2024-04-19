import "./Cart.css";
import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const { cart, emptyCart, totalQuantity} =
    useContext(CartContext);



    const totalPrice = cart.reduce((total, product) => {
      return total + product.price * product.quantity}, 0)

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

  return (
    <section>
      <h2>Your Cart</h2>
      {cart.length > 0 && (
        <>
          {cart.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
        </>
      )}

      <div className="checkoutDiv">
        <h3> Total: $ {totalPrice} </h3>
        <button className="bin" onClick={() => emptyCart()}>
          {" "}
          <img
            style={{
              width: 20,
              height: 20,
              backgroundColor: "peru",
              borderRadius: 15,
            }}
            src="public/trash-bin.png"
            alt=""
          />{" "}
        </button>
        <Link to="/checkout">
          {" "}
          <button>Checkout </button>
        </Link>
        <Link to={"/"} className="linkNav">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </section>
  );
}