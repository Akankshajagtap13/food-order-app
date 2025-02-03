import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RedeemIcon from "@mui/icons-material/Redeem";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2c2c2c", // Dark background color
        color: "white", // White text color
        textAlign: "center", // Center aligned text
        padding: "2rem 1rem", // Padding on top and bottom
        marginTop: "2rem", // Space above the footer
        width: "100%", // Full width to cover the entire screen
      }}
    >
      <Box>
        <Typography variant="h5" gutterBottom>
          ReactMeals
        </Typography>
        <Typography variant="body1" gutterBottom>
       <h2>   Delicious food delivered to your door. </h2>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", mt: 2 }}>
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", fontSize: "2rem", "&:hover": { color: "#f4a261" } }}  
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", fontSize: "2rem", "&:hover": { color: "#f4a261" } }}  
          >
            <Twitter />
          </IconButton>
          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", fontSize: "2rem", "&:hover": { color: "#f4a261" } }}  
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", fontSize: "2rem", "&:hover": { color: "#f4a261" } }}  
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>

      {/* Footer Navigation Links (Header Links) */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "2rem", mt: 2 }}>
        <Link
          href="/home"
          underline="hover"
          sx={{ color: "white", "&:hover": { color: "#f4a261" } }}
        >
          <HomeIcon sx={{ verticalAlign: "middle", mr: 0.5, fontSize: "1.5rem" }} /> {/* Increased icon size */}
          Home
        </Link>
        <Link
          href="/menu"
          underline="hover"
          sx={{ color: "white", "&:hover": { color: "#f4a261" } }}
        >
          <MenuBookIcon sx={{ verticalAlign: "middle", mr: 0.5, fontSize: "1.5rem" }} /> {/* Increased icon size */}
          Menu
        </Link>
        <Link
          href="/offer"
          underline="hover"
          sx={{ color: "white", "&:hover": { color: "#f4a261" } }}
        >
          <LocalOfferIcon sx={{ verticalAlign: "middle", mr: 0.5, fontSize: "1.5rem" }} /> {/* Increased icon size */}
          Offer
        </Link>
        <Link
          href="/reward"
          underline="hover"
          sx={{ color: "white", "&:hover": { color: "#f4a261" } }}
        >
          <RedeemIcon sx={{ verticalAlign: "middle", mr: 0.5, fontSize: "1.5rem" }} /> {/* Increased icon size */}
          Reward
        </Link>
      </Box>

      <Box sx={{ borderTop: "1px solid #444", paddingTop: "1rem", marginTop: "1rem" }}>
        <Typography variant="body2" gutterBottom>
          © 2025 ReactMeals. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <Link href="/privacy-policy" underline="hover" sx={{ color: "#f4a261", "&:hover": { color: "white" } }}>
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms" underline="hover" sx={{ color: "#f4a261", "&:hover": { color: "white" } }}>
            Terms of Service
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
