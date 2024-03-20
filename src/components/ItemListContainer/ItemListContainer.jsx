/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) document.title = 'Ground Footwear | ' + categoryId 
    return () => {
        document.title = 'Ground Footwear | Reconnect with Mother Earth'
    }
}, [categoryId])

  useEffect(() => {

    const productConditionalRendering = categoryId ? getProductsByCategory : getProducts

    productConditionalRendering(categoryId).then((data) => setProducts(data));
  }, [categoryId]);

  return (
    <section>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </section>
  );
}
