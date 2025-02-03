import React, { useContext, useState } from "react";
import { Box, Typography, Grid, Card, CardContent, TextField,CardMedia, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartContext from "../../store/cart-context"; // Import CartContext

const Menu = () => {
  const foodItems = [
    { id: "1", title: "Burger", description: "A delicious beef burger with cheese and lettuce.", price: 399, img: "https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg" },
    { id: "2", title: "Pizza", description: "A classic pizza with tomato sauce, cheese, and pepperoni.", price: 699, img: "https://via.placeholder.com/300x200.png?text=Pizza" },
    { id: "3", title: "Pasta", description: "Creamy pasta with fresh herbs and Parmesan.", price: 549, img: "https://via.placeholder.com/300x200.png?text=Pasta" },
    { id: "4", title: "Salad", description: "Fresh green salad with a variety of vegetables.", price: 299, img: "https://via.placeholder.com/300x200.png?text=Salad" },
    { id: "5", title: "Sushi", description: "Assorted sushi rolls with fresh ingredients.", price: 799, img: "https://via.placeholder.com/300x200.png?text=Sushi" },
    { id: "6", title: "Tacos", description: "Spicy and flavorful tacos with beef and salsa.", price: 349, img: "https://via.placeholder.com/300x200.png?text=Tacos" },
    { id: "7", title: "Hotdog", description: "Juicy hotdog with ketchup and mustard.", price: 199, img: "https://via.placeholder.com/300x200.png?text=Hotdog" },
    { id: "8", title: "Fries", description: "Crispy golden fries with a touch of salt.", price: 150, img: "https://via.placeholder.com/300x200.png?text=Fries" },
    { id: "9", title: "Chicken Wings", description: "Spicy chicken wings with a tangy dipping sauce.", price: 450, img: "https://via.placeholder.com/300x200.png?text=Chicken+Wings" },
    { id: "10", title: "Steak", description: "A tender grilled steak served with veggies.", price: 999, img: "https://via.placeholder.com/300x200.png?text=Steak" },
    { id: "11", title: "Noodles", description: "Stir-fried noodles with vegetables and soy sauce.", price: 399, img: "https://via.placeholder.com/300x200.png?text=Noodles" },
    { id: "12", title: "Sandwich", description: "A crispy sandwich with ham, cheese, and lettuce.", price: 249, img: "https://via.placeholder.com/300x200.png?text=Sandwich" },
    { id: "13", title: "Soup", description: "Hot and creamy tomato soup.", price: 199, img: "https://via.placeholder.com/300x200.png?text=Soup" },
    { id: "14", title: "Curry", description: "Spicy chicken curry served with rice.", price: 699, img: "https://via.placeholder.com/300x200.png?text=Curry" },
    { id: "15", title: "Ice Cream", description: "Creamy ice cream with chocolate and vanilla.", price: 199, img: "https://via.placeholder.com/300x200.png?text=Ice+Cream" },
    { id: "16", title: "Coffee", description: "Freshly brewed coffee with a rich aroma.", price: 129, img: "https://via.placeholder.com/300x200.png?text=Coffee" },
    { id: "17", title: "Pancakes", description: "Fluffy pancakes with syrup and butter.", price: 299, img: "https://via.placeholder.com/300x200.png?text=Pancakes" },
    { id: "18", title: "Waffles", description: "Crispy waffles with a sweet syrup topping.", price: 299, img: "https://via.placeholder.com/300x200.png?text=Waffles" },
    { id: "19", title: "Ice Tea", description: "Refreshing iced tea with lemon.", price: 179, img: "https://via.placeholder.com/300x200.png?text=Ice+Tea" },
    { id: "20", title: "Smoothie", description: "Fresh fruit smoothie with a tropical blend.", price: 249, img: "https://via.placeholder.com/300x200.png?text=Smoothie" },
    { id: "21", title: "Cheesecake", description: "Rich and creamy cheesecake with a graham cracker crust.", price: 399, img: "https://via.placeholder.com/300x200.png?text=Cheesecake" },
    { id: "22", title: "Pavlova", description: "A light and fluffy dessert with meringue and fruit.", price: 349, img: "https://via.placeholder.com/300x200.png?text=Pavlova" },
    { id: "23", title: "Brownie", description: "Fudgy and decadent chocolate brownies.", price: 249, img: "https://via.placeholder.com/300x200.png?text=Brownie" },
    { id: "24", title: "Tiramisu", description: "Coffee-flavored Italian dessert with mascarpone cheese.", price: 449, img: "https://via.placeholder.com/300x200.png?text=Tiramisu" },
    { id: "25", title: "Falafel", description: "Crispy chickpea fritters served with tahini sauce.", price: 299, img: "https://via.placeholder.com/300x200.png?text=Falafel" },
    { id: "26", title: "Biryani", description: "Aromatic rice dish with tender chicken or mutton.", price: 699, img: "https://via.placeholder.com/300x200.png?text=Biryani" },
    { id: "27", title: "Paella", description: "Spanish rice dish with seafood and saffron.", price: 799, img: "https://via.placeholder.com/300x200.png?text=Paella" },
    { id: "28", title: "Samosa", description: "Crispy pastry filled with spiced potatoes and peas.", price: 99, img: "https://via.placeholder.com/300x200.png?text=Samosa" },
    { id: "29", title: "Ramen", description: "Japanese noodle soup with pork and broth.", price: 649, img: "https://via.placeholder.com/300x200.png?text=Ramen" },
    { id: "30", title: "Grilled Fish", description: "Flaky fish grilled to perfection with lemon.", price: 799, img: "https://via.placeholder.com/300x200.png?text=Grilled+Fish" },
    { id: "31", title: "Shawarma", description: "Grilled chicken or lamb served in pita bread.", price: 399, img: "https://via.placeholder.com/300x200.png?text=Shawarma" },
    { id: "32", title: "Burgers Combo", description: "Combo of a beef burger, fries, and a drink.", price: 499, img: "https://via.placeholder.com/300x200.png?text=Burgers+Combo" },
    { id: "33", title: "Churros", description: "Crispy Spanish doughnuts with cinnamon sugar.", price: 249, img: "https://via.placeholder.com/300x200.png?text=Churros" },
    { id: "34", title: "Grilled Chicken", description: "Juicy grilled chicken served with veggies.", price: 499, img: "https://via.placeholder.com/300x200.png?text=Grilled+Chicken" },
    { id: "35", title: "Fruit Salad", description: "Fresh mixed fruit salad with a honey dressing.", price: 199, img: "https://via.placeholder.com/300x200.png?text=Fruit+Salad" },
    { id: "36", title: "Lamb Kebab", description: "Juicy lamb skewers served with pita and sauce.", price: 599, img: "https://via.placeholder.com/300x200.png?text=Lamb+Kebab" },
   
  ];


  const navigate = useNavigate();
  const cartCtx = useContext(CartContext); 

  const [openDialog, setOpenDialog] = useState(false); // To manage dialog visibility
  const [dialogMessage, setDialogMessage] = useState(""); 
  const [searchQuery, setSearchQuery] = useState("");// Message for dialog

  const addToCartHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 }); // Add the item to the cart
    setDialogMessage(`${item.title} added to cart!`); // Set the message to show the item's name
    setOpenDialog(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog
  };

  const handleGoToCart = () => {
    handleCloseDialog(); // Close the dialog before navigating
    navigate("/cart"); // Navigate to the Cart page
  };

  const filteredItems = foodItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Box sx={{ padding: "2rem" }}>
    <Typography
  variant="h4"
  gutterBottom
  align="center"
  sx={{
    marginBottom: "1rem",
    color: "white", // White text color
  }}
>
  Welcome to Our Menu
</Typography>

<Typography
  variant="body1"
  paragraph
  align="center"
  sx={{
    marginBottom: "2rem",
    color: "white", // White text color
  }}
>
  Browse through our delicious food options below.
</Typography>


    {/* Search Box */}
    <TextField
  variant="outlined"
  label="Search Menu"
  fullWidth
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  sx={{
    marginBottom: "2rem",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white", // White border
      },
      "&:hover fieldset": {
        borderColor: "white", // White border on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "white", // White border when focused
      },
    },
    "& .MuiInputLabel-root": {
      color: "white", // White label color
    },
    "& .MuiInputBase-input": {
      color: "white", // White input text color
    },
  }}
/>

    <Grid container spacing={4} justifyContent="center">
      {filteredItems.length === 0 ? (
        <Typography variant="h6" color="textSecondary" align="center" sx={{ width: "100%" }}>
          No items found
        </Typography>
      ) : (
        filteredItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: 3,
                borderRadius: "10px",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.img}
                alt={item.title}
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "1rem" }}>
                  {item.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ marginTop: "1rem" }}>
                  ₹{item.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginTop: "1rem",
                    backgroundColor: "#4d1601",
                    "&:hover": { backgroundColor: "#2c0d00" },
                  }}
                  onClick={() => addToCartHandler(item)} // Pass the item to the addToCartHandler
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>

    {/* Dialog for item added to cart */}
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      sx={{
        '& .MuiDialog-paper': {
          width: '400px', 
          maxWidth: '100%', 
        },
      }}
    >
      <DialogTitle>Item Added to Cart</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="textSecondary">
          {dialogMessage}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleGoToCart} // Use the handleGoToCart function for button click
          color="primary"
          sx={{
            backgroundColor: "#4d1601",
            "&:hover": {
              backgroundColor: "#2c0d00",
            },
            color: "white",
          }}
        >
          Go to Cart
        </Button>
        <Button
          onClick={handleCloseDialog}
          color="secondary"
          sx={{
            backgroundColor: "red", 
            "&:hover": {
              backgroundColor: "#ff3333", 
            },
            color: "white", 
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </Box>
);
};

export default Menu;