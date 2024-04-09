/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemDetail({
  name,
  img,
  category,
  description,
  price,
  stock,
}) {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <>
      <article className="CardItemDetail">
        <header className="Header">
          <h3 className="ItemHeader">{name}</h3>
        </header>
        <picture>
          <img src={img} alt={name} className="ItemImgDetail" />
        </picture>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flexWrap: "wrap",
            marginBottom: 25,
          }}
        >
          <p className="InfoDetail">
            <strong>Category: </strong>
            {category}
          </p>
          <p className="InfoDetail">
            <strong>Description:</strong> {description}
          </p>
          <p className="InfoDetail">
            <strong>Price:</strong> ${price}
          </p>
          <p className="InfoDetail">
            <strong>Stock:</strong> {stock}
          </p>
        </div>
        <div style={{height: "200px"}}>
          {quantityAdded > 0 ? (
            <>
              <p style={{ color: "blue", margin: "0px 200px 30px 100px" }}>
                Items successfully added to the cart
              </p>
              <button className="countCartButton">
                <Link to={"/cart"} className="linkNav">
                  View Cart
                </Link>
              </button>
            </>
          ) : (
            <ItemCount stock={stock} onAddToCart={handleAddToCart} />
          )}
        </div>
      </article>
    </>
  );
}
