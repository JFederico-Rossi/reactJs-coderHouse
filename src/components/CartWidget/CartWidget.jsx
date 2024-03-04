import cart from "./assets/shopping-cart.png";
import "./CartWidget.css";

export default function CartWidget() {
  return (
    <>
      <div>
        <img src={cart} alt="cart widget" className="cart" />
        <p>2</p>
      </div>
    </>
  );
}
