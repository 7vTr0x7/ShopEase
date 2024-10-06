import React from "react";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:prodId" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
