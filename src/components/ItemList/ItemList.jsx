/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Item from "../Item/Item";
import './ItemList.css'

export default function ItemList({ products }) {
  return (
    <>
      <div className='listGroup'>
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
