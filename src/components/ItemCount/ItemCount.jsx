import "./ItemCount.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ItemCount({ stock, onAddToCart }) {
  const [contador, setContador] = useState(0);

  const handleClickDec = () => {
    if (contador > 0 && contador < stock) {
      setContador(contador - 1);
    } 
  };

  const handleClickInc = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const handleClickAdd = () => {
    if (contador > 0) {
      const itemCount = parseInt(contador);
      onAddToCart(itemCount);
    }
    console.log(contador + " items were added to your cart");
  };
  return (
    <>
      <div className="countContainer">
        <div className="countDiv">
          <button onClick={handleClickDec} className="countButton" disabled={contador === 0}>
            -
          </button>
          <h4>{contador}</h4>
          <button onClick={handleClickInc} className="countButton" disabled={contador === stock}>
            +
          </button>
        </div>
        <button
          onClick={handleClickAdd}
          className="addButton"
          disabled={!stock}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
