import React from 'react';

const NewProductForm = () => {
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
    </aside>
  );
}
 
export default NewProductForm;