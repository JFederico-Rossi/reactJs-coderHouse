/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export default function Item({id, name, img, category, price, stock}) {
const navigate = useNavigate();

const handleClick = (id) => {
  navigate(`/product/${id}`);
};

  return (
    <>
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: 'wrap',
          border: "solid 1px darkgreen",
          width: 180,
          height: 400,
          borderRadius: 15,
          marginBottom: 20,
          padding: 10,
          gap: 5,
        }}
      >
        <h3>{name}</h3>
        <img src={img} alt={name} style={{ width: 150, marginBottom: 20 }} />
        <p>{category}</p>
        <p>Precio $ {price}</p>
        <p>Stock: {stock} </p>
        <button onClick={() => handleClick(id)}> See details </button>
      </article>
    </>
  );
}
