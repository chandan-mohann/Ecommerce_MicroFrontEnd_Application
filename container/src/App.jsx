import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product } from "product/Product";
import { Checkout } from "checkout/Checkout";
import { Cart } from "cart/Cart";
import "./index.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

const App = () => (
  <Router>
    <div id="app">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  </Router>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
