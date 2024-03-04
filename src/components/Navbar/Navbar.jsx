import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import logo from './assets/ground-footwear.png'

export default function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <div>
          <button className="button">MEN</button>
          <button className="button">WOMEN</button>
          <button className="button">ACCESSORIES</button>
        </div>
        
        <CartWidget />
      </nav>
    </>
  );
}
