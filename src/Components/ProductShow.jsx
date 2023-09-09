// ProductList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((response) => {
        if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error(
            "API response does not contain a products array:",
            response.data
          );
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      {products.length === 0 ? (
        <div>No products available.</div>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
