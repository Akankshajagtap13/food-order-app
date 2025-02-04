import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const OrderTracking = ({ orderId }) => {
  const [orderStatus, setOrderStatus] = useState("Processing...");

  useEffect(() => {
    const fetchOrderStatus = async () => {
      // Simulate a backend fetch for order tracking
      setTimeout(() => {
        setOrderStatus("Delivered"); // Simulating the change of status
      }, 2000);
    };

    fetchOrderStatus();
  }, [orderId]);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">Order Tracking for ID: {orderId}</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginTop: 2 }}>
        {orderStatus === "Processing..." ? (
          <CircularProgress />
        ) : (
          <Typography variant="body1">{orderStatus}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default OrderTracking;
