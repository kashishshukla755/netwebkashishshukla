// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./Components/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
