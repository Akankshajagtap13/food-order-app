import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;  // Fixed to check for 6 characters

const CheckoutForm = (props) => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    street: "",
    postalCode: "",
    city: "",
  });

  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitOrderHandler = (e) => {
    e.preventDefault();

    const enteredNameIsValid = !isEmpty(formInputs.name);
    const enteredAddressIsValid = !isEmpty(formInputs.street);
    const enteredPostalCodeIsValid = isSixChars(formInputs.postalCode);  // Validates 6 characters for postal code
    const enteredCityIsValid = !isEmpty(formInputs.city);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredAddressIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    // Submit form data
    props.onConfirmOrder(formInputs);
  };

  return (
    <Box
      component="form"
      onSubmit={submitOrderHandler}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: "400px",
        margin: "auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Checkout Form
      </Typography>

      <TextField
        label="Your Name"
        name="name"
        value={formInputs.name}
        onChange={handleChange}
        error={!formValidity.name}
        helperText={!formValidity.name && "Please enter a valid name!"}
        fullWidth
      />

      <TextField
        label="Street Address"
        name="street"
        value={formInputs.street}
        onChange={handleChange}
        error={!formValidity.street}
        helperText={!formValidity.street && "Please enter a valid address!"}
        fullWidth
      />

      <TextField
        label="Postal Code"
        name="postalCode"
        value={formInputs.postalCode}
        onChange={handleChange}
        error={!formValidity.postalCode}
        helperText={!formValidity.postalCode && "Please enter a valid Zip (6 characters long)"}
        fullWidth
      />

      <TextField
        label="City"
        name="city"
        value={formInputs.city}
        onChange={handleChange}
        error={!formValidity.city}
        helperText={!formValidity.city && "Please enter a valid city!"}
        fullWidth
      />

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button variant="contained" color="primary" type="submit">
          Confirm
        </Button>
        <Button variant="outlined" color="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutForm;
