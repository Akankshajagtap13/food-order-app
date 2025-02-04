import React, { useState, useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import classes from "./Cart.module.css";
import { Button, Box, Typography } from "@mui/material";
import CartContext from "../../store/cart-context";
import StripeCheckout from "./StripeCheckout"; // Import the Stripe checkout component
import OrderTracking from "./OrderTracking"; 

const Cart = (props) => {
  const [order, setOrder] = useState(false);
  const [orderSubmiting, setOrderSubmiting] = useState(false);
  const [orderSubmited, setOrderSubmited] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("pending"); 
  const [paymentIntent, setPaymentIntent] = useState(null);
  const [orderId, setOrderId] = useState(null); 
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const showOrderForm = (value) => {
    setOrder(!order);
  };

  const submitOrderHandler = (userData) => {
    setOrderSubmiting(true);

    setTimeout(() => {
      setOrderId(Date.now().toString()); 
      setOrderSubmiting(false);
      setOrderSubmited(true);
      setPaymentStatus("pending");
    }, 1500);

    cartCtx.clearCart();
  };

  const handlePaymentSuccess = (paymentIntent) => {
    setPaymentStatus("success");
    setPaymentIntent(paymentIntent); 
    setOrderSubmited(true); 
  };

  const handlePaymentFailure = (error) => {
    setPaymentStatus("failed");
    console.error(error);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      {hasItems && <button onClick={showOrderForm}>Order</button>}
      <button
        className={classes["button--alt"]}
        onClick={props.hideCartHandler}
      >
        Close
      </button>
    </div>
  );

  const ModalView = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {order && (
        <CheckoutForm
          onCancel={props.hideCartHandler}
          cartItems={cartItems}
          onConfirmOrder={submitOrderHandler}
        />
      )}
      {!order && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <Box mt={2}>
        <Typography variant="h6">Order ID: {orderId}</Typography>
        {paymentStatus === "pending" && (
          <StripeCheckout
            amount={totalAmount * 100}  // Stripe expects amount in cents
            onSuccess={handlePaymentSuccess}
            onCancel={props.hideCartHandler}
          />
        )}
        {paymentStatus === "success" && <OrderTracking orderId={orderId} />}
        {paymentStatus === "failed" && <p>Payment failed. Please try again.</p>}
      </Box>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.hideCartHandler}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      {!orderSubmiting && !orderSubmited && ModalView}
      {orderSubmiting && isSubmittingModalContent}
      {orderSubmited && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
