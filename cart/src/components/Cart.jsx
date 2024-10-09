import React, { useState } from 'react';
import './ShoppingCart.css';
import { Typography, Box } from '@mui/material';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', quantity: 1,price:30 },
    { id: 2, name: 'Product 2', quantity: 2,price:80 },
    { id: 3, name: 'Product 3', quantity: 1,price:900 },
  ]);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
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
           <Box key={item.id} className="cart-item" mb={2}>
              <div className="item-info">
                <Typography  variant="body1" className="item-description">{item.name}</Typography>
                <span className="item-price">
                      ${(item.price * item.quantity).toFixed(2)}
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
