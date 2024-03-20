import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import logo from './assets/ground-footwear.png'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to ={'/'}><img src={logo} alt="logo" className="logo" /></Link>
        <div>
          <button className="navButton"> <Link to ={'category/Men'} className="linkNav">MEN</Link></button>
          <button className="navButton"><Link to ={'category/Women'} className="linkNav">WOMEN</Link></button>
          <button className="navButton"><Link to ={'category/Accessories'} className="linkNav">ACCESSORIES</Link></button>
        </div>
        
        <CartWidget />
      </nav>
    </>
  );
}
