import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Snackbar,
  Alert
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/store';

export const Product = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [state, setState] = useState({
    products: [],
    loading: true,
    error: null,
  });


  useEffect(() => {
    console.log('Updated cart state:', cart);
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setState({ products: data, loading: false, error: null });
      } catch (error) {
        setState({ products: [], loading: false, error: error.message });
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
  };

  const removeFromCart = (productId) => {
    dispatch(REMOVE_FROM_CART({ id: productId }));
  };

  const { products, loading, error } = state;

  if (loading) return <CircularProgress />;
  
  if (error) {
    return (
      <Snackbar open={true} autoHideDuration={6000}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    );
  }

  const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log("pro",products)
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
                {Object.values(cart).map(item => {
                  // {Object.values(item).map(innerItem => {
                  console.log("items samaa",item)
                  return(
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
                  )
                // })}
                })}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
