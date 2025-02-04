import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button, Box, Typography, CircularProgress } from '@mui/material';

const StripeCheckout = ({ amount, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return; // Ensure Stripe is loaded

    setIsProcessing(true);

    // Create a payment intent on your backend and get the client secret
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: amount }),
    });
    const paymentData = await response.json();

    const clientSecret = paymentData.clientSecret;

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      setIsProcessing(false);
      console.error(error);
      // Handle error (e.g., display error message)
    } else if (paymentIntent.status === 'succeeded') {
      setIsProcessing(false);
      onSuccess(paymentIntent);
    }
  };

  return (
    <Box component="form" onSubmit={handlePayment} sx={{ padding: 2 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Payment
      </Typography>

      <CardElement />

      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" color="primary" type="submit" disabled={isProcessing}>
          {isProcessing ? <CircularProgress size={24} /> : 'Pay Now'}
        </Button>
        <Button variant="outlined" color="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default StripeCheckout;
