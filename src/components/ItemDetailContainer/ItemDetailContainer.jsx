import { useState, useEffect, useContext } from 'react';
import { getProductById } from '../../firebase/firebase.js';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext.jsx';


export default function ItemDetailContainer() {
  const [product, setProduct] = useState (null);
  const {productId} = useParams ();
  const { cart } = useContext(CartContext);


  useEffect(() => {
    let ignore = false;

    getProductById(productId)
      .then((res) => {
        if (!ignore) {
          const isInCart = cart.find((prod) => prod.id === res.id);
          if (isInCart) {
            setProduct({ ...res, stock: isInCart.stock - isInCart.quantity });
          } else {
            setProduct(res);
          }
        }
      })
      .catch((err) => console.log(err));

    return () => {
      ignore = true;
    };
  }, [productId, cart]);

  
  return (
  <>
    <ItemDetail {...product}/> 
  </>
  )
}
