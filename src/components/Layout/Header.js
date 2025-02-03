import React from "react";
import HeaderCartBtn from "./HeaderCartBtn";
import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RedeemIcon from "@mui/icons-material/Redeem";
import { Link } from "react-router-dom"; // Import Link for routing

const Header = (props) => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#4d1601", // Set the background color
          borderRadius: "20px",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              color: "white", // Ensure text color is readable
            }}
          >
            <h1>ReactMeals</h1>
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton color="inherit" sx={{ "&:hover": { color: "orange" } }}>
                <HomeIcon sx={{ color: "white", "&:hover": { color: "orange" } }} />
                <Typography
                  variant="body2"
                  sx={{
                    marginLeft: 0.5,
                    color: "white",
                    "&:hover": { color: "orange" },
                  }}
                >
                  <h2>Home</h2>
                </Typography>
              </IconButton>
            </Link>
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <IconButton color="inherit" sx={{ "&:hover": { color: "orange" } }}>
                <MenuBookIcon sx={{ color: "white", "&:hover": { color: "orange" } }} />
                <Typography
                  variant="body2"
                  sx={{
                    marginLeft: 0.5,
                    color: "white",
                    "&:hover": { color: "orange" },
                  }}
                >
                  <h2>Menu</h2>
                </Typography>
              </IconButton>
            </Link>
            <Link to="/offer" style={{ textDecoration: "none" }}>
              <IconButton color="inherit" sx={{ "&:hover": { color: "orange" } }}>
                <LocalOfferIcon sx={{ color: "white", "&:hover": { color: "orange" } }} />
                <Typography
                  variant="body2"
                  sx={{
                    marginLeft: 0.5,
                    color: "white",
                    "&:hover": { color: "orange" },
                  }}
                >
                  <h2>Offer</h2>
                </Typography>
              </IconButton>
            </Link>
            <Link to="/reward" style={{ textDecoration: "none" }}>
              <IconButton color="inherit" sx={{ "&:hover": { color: "orange" } }}>
                <RedeemIcon sx={{ color: "white", "&:hover": { color: "orange" } }} />
                <Typography
                  variant="body2"
                  sx={{
                    marginLeft: 0.5,
                    color: "white",
                    "&:hover": { color: "orange" },
                  }}
                >
                  <h2>Reward</h2>
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <HeaderCartBtn onClick={props.showCartHandler} />
        </Toolbar>
      </AppBar>

      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table with food" />
      </div>
    </>
  );
};

export default Header;
