import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4040/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [])

  return ( 
    <React.Fragment>
      <h2>Products</h2>
      { products.map(product => <Product key={product._id} name={product.name} price={product.price} />) }
      <div style={{
        backgroundColor: "#5672f0",
        padding: "1em",
        width: "300px",
      }}>
        <h2 style={{ color: "white" }}>
          Create Product
        </h2>
        <form style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <input
            placeholder="Name"
            style={{ marginBottom: "1em"}}
            type="text"></input>
          <input
            placeholder="Price"
            style={{ marginBottom: "1em"}}
            type="number"></input>
          <button
            style={{
              color: "white",
              backgroundColor: "navy"
            }}>Create</button>
        </form>
      </div>
    </React.Fragment>
  );
}
 
export default ProductsList;