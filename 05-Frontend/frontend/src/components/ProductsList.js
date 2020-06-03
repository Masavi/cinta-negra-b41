import React from 'react';
import Product from './Product';

const ProductsList = () => {
  return ( 
    <React.Fragment>
      <h2>Products</h2>
      <Product
        name="Sopa Nissin"
        price={10.50} />
    </React.Fragment>
  );
}
 
export default ProductsList;