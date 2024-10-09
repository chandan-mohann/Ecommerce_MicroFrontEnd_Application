import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';

export const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Checkout successful!');
  };

  return (
    <Container maxWidth="sm" className="checkout">
      <Typography variant="h4" align="center" gutterBottom>
        Checkout
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Complete your purchase!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Card Number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Expiry Date (MM/YY)"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="CVV"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="checkout-button"
        >
          Complete Purchase
        </Button>
      </form>
    </Container>
  );
};
