// ProductPage.js
import React from "react";
import SearchInput from "./SearchInput";
import ProductList from "./ProductShow";

function ProductPage() {
  return (
    <div>
      <SearchInput />
      <ProductShow />
    </div>
  );
}

export default ProductPage;
