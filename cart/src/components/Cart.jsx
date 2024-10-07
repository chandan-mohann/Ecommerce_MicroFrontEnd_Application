import React, { useState } from 'react';
import './ShoppingCart.css';
import {Header} from './Header';
import {Footer} from './Footer';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', quantity: 1 },
    { id: 2, name: 'Product 2', quantity: 2 },
    { id: 3, name: 'Product 3', quantity: 1 },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="shopping-cart">
      <Header />
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <div className="item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">
                  Quantity: 
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </span>
              </div>
              <button className="remove-button" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
};
