import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product } from "product/Product";
import { Checkout } from "checkout/Checkout";
import { Cart } from "cart/Cart";
import "./Container.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Container = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleCartUpdate = (event) => {
      const updatedCart = event.detail;
      const newCartItems = Object.values(updatedCart);
      setCartItems(newCartItems);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);
  console.log("Cart Item",cartItems)
  return(
  <Router>
    <div id="app">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart cart={cartItems} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  </Router>
  )
};
