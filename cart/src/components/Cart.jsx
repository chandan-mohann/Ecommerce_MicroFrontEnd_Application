import React, { useEffect, useState } from 'react';
import './ShoppingCart.css';
import { Typography, Box } from '@mui/material';

export const Cart = ({cart}) => {  

  const totalPrice = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="shopping-cart">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1" align="center">No items in cart</Typography>
      ) : (
        <div>
          {cart.map(item => (
  <Box key={item.product.id} className="cart-item" mb={2}>
    <div className="item-info">
      <Typography variant="body1" className="item-description">{item.product.title} (X{item.quantity})</Typography>
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
