import { useContext } from "react";
import cart from "./assets/shopping-cart.png";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {

  const {totalQuantity} = useContext(CartContext)
  return (
    <>
      <div>
        <Link to={'/cart'} style={{textDecoration: 'none'}}>
        <img src={cart} alt="cart widget" className="cart" />
        <p style={{color: '#213547', fontSize: 'small'}}>{totalQuantity}</p></Link>
      </div>
    </>
  );
}
