import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Product } from "product/Product";
import { Checkout } from "checkout/Checkout";
import { Cart } from "cart/Cart";
import "./index.css";
import { Footer } from "./Footer";
import store from "../../shared/store"
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    <Footer/>
  </Router>
  </Provider>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
