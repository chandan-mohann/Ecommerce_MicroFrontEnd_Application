import React, { useEffect, useState } from 'react';
import './ProductList.css';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState({});

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
    setCart((prevCart) => {
      const currentQuantity = prevCart[product.id]?.quantity || 0;
      const newCart = {
        ...prevCart,
        [product.id]: { quantity: currentQuantity + 1, product }
      };
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[productId]?.quantity || 0;
      const newCart = { ...prevCart };

      if (currentQuantity <= 1) {
        delete newCart[productId];
      } else {
        newCart[productId].quantity -= 1;
      }

      return newCart;
    });
  };

  const handleSubmit = () => {
    const event = new CustomEvent('addCart', { detail: cart });
    console.log("event product", event);
    dispatchEvent(event);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list">
      <Typography variant="h4" gutterBottom>Product List</Typography>
      <Button variant="contained" onClick={handleSubmit}>Go to Cart</Button>
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
