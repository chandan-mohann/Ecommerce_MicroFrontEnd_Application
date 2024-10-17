import React, { useEffect, useState } from 'react';
import './ProductList.css';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Snackbar,
  Alert
} from '@mui/material';

export const Product = ({ cart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const updatedCart = {
      ...cart,
      [product.id]: { quantity: (cart[product.id]?.quantity || 0) + 1, product },
    };

    const event = new CustomEvent('cartUpdated', { detail: updatedCart });
    window.dispatchEvent(event);
  };

  const removeFromCart = (productId) => {
    const currentQuantity = cart[productId]?.quantity || 0;
    let updatedCart;

    if (currentQuantity <= 1) {
      const { [productId]: _, ...rest } = cart;
      updatedCart = rest;
    } else {
      updatedCart = {
        ...cart,
        [productId]: { ...cart[productId], quantity: currentQuantity - 1 },
      };
    }

    const event = new CustomEvent('cartUpdated', { detail: updatedCart });
    window.dispatchEvent(event);
  };
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list">
      <Typography variant="h4" gutterBottom>Product List</Typography>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                style={{ objectFit: 'contain' }} 
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${product.price}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button
                    variant="outlined"
                    onClick={() => removeFromCart(product.id)}
                    disabled={!cart[product.id]}
                  >
                    -
                  </Button>
                  <Typography variant="body1">{cart[product.id]?.quantity || 0}</Typography>
                  <Button variant="contained" onClick={() => addToCart(product)}>+</Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
