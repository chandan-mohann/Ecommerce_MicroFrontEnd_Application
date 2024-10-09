import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';
import { Typography, Box } from '@mui/material';

export const Cart = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const handleAddCart = (e) => {
      console.log("event in cart",e.detail)
      setCart(e.detail);
    };

    window.addEventListener('addCart', handleAddCart);

    return () => {
      window.removeEventListener('addCart', handleAddCart);
    };
  }, []);

  const cartItems = Object.values(cart);
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="shopping-cart">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" align="center">No items in cart</Typography>
      ) : (
        <div>
          {cartItems.map(item => (
            <Box key={item.product.id} className="cart-item" mb={2}>
              <div className="item-info">
                <Typography variant="body1" className="item-description">{item.product.title}</Typography>
                <span className="item-price">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </Box>
          ))}
          <Typography variant="h5" className="total-price" align="right" mt={2}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
        </div>
      )}
    </div>
  );
};
