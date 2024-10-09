import React, { useEffect } from 'react';
import './ShoppingCart.css';
import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log('Updated cart:', cart);
  }, [cart]);

  // Calculate total price
  const totalPrice = Object.values(cart).reduce((acc, item) => {
    return acc + Object.values(item).reduce((innerAcc, innerItem) => {
      return innerAcc + (innerItem.price * innerItem.quantity);
    }, 0);
  }, 0);

  return (
    <div className="shopping-cart">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      {Object.keys(cart).length > 0 ? (
        <div>
          {Object.values(cart).map(item => (
            <Box key={item.id} className="cart-item" mb={2}>
              {Object.values(item).map(innerItem => {
                return (
                  <Typography 
                    key={`${item.id}-${innerItem.id}`} 
                    variant="body1" 
                    className="item-description"
                  >
                    <strong>{innerItem.title}</strong> (x{innerItem.quantity}) - 
                    <span className="item-price">
                      ${(innerItem.price * innerItem.quantity).toFixed(2)}
                    </span>
                  </Typography>
                );
              })}
            </Box>
          ))}
          <Typography variant="h5" className="total-price" align="right" mt={2}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
        </div>
      ) : (
        <Typography variant="body1" align="center">No items in cart</Typography>
      )}
    </div>
  );
};
