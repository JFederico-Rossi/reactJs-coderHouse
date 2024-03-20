import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {
  const [product, setProduct] = useState (null);
  const {productId} = useParams ();

  useEffect (()=> { 
    getProductById (productId)
    .then(data => {setProduct(data)})
  }, [productId])
  
  return (
  <>
    <ItemDetail {...product}/> 
  </>
  )
}
