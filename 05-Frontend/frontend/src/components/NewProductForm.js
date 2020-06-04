import React, { useState } from 'react';

const NewProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, price);
  }

  return ( 
    <aside style={{
      backgroundColor: "#5672f0",
      padding: "1em",
      width: "300px",
      height: "200px",
    }}>
      <h2 style={{ color: "white" }}>
        Create Product
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "1em"}}
          type="text"></input>
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginBottom: "1em"}}
          type="number"></input>
        <button
          type="submit"
          style={{
            color: "white",
            backgroundColor: "navy"
          }}>Create</button>
      </form>
    </aside>
  );
}
 
export default NewProductForm;