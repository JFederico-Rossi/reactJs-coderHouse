import "./ItemCount.css";
import { useState } from "react";

export default function ItemCount({stock}) {
  const [contador, setContador] = useState(0);

  const handleClickDec = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleClickInc = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const handleClickAdd = () => {
    console.log( contador + " items were added to your cart");
  };
  return (
    <>
      <div className="countContainer">
        <div className="countDiv">
          <button onClick={handleClickDec} className="countButton">
            -
          </button>
          <h4>{contador}</h4>
          <button onClick={handleClickInc} className="countButton">
            +
          </button>
        </div>
        <button onClick={handleClickAdd} className="addButton" disabled= {!stock}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
