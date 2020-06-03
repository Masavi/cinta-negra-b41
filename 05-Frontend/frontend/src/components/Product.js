import React from 'react';

const Product = (props) => {
  return (
    <div style={{
      padding: "15px",
      backgroundColor: "navy",
      color: "white",
      width: "200px",
      textAlign: "center",
      border: "2px solid gray",
      borderRadius: "5px",
      marginBottom: "10px",
    }}>
      <h3>{ props.name }</h3>
      <h4>{ `$${props.price}` }</h4>
    </div>
  );
}
 
export default Product;
