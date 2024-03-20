/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

export default function ItemDetail({
  name,
  img,
  category,
  description,
  price,
  stock,
}) {
  return (
    <>
      <article
        className="CardItemDetail">
        <header className="Header">
          <h3 className="ItemHeader">{name}</h3>
        </header>
        <picture>
          <img
            src={img}
            alt={name}
            className="ItemImgDetail"
          />
        </picture>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            flexWrap: 'wrap',
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
        <div>
          <ItemCount stock={stock} />
        </div>
      </article>
    </>
  );
}
