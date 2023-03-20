import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import logo from "../../../assets/images/logo.png";
import car from "../../../assets/images/svg/car.svg";
import profile from "../../../assets/images/svg/person.svg";
import Shoppingcart from "../../../assets/images/svg/cart.svg";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import Badge from "@mui/material/Badge";
import { useStyles } from "./headerSearchbar.style";
const Header_searchbar = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.parent}>
      <Box className={classes.child}>
        <Box
          sx={{
            paddingLeft: { xs: "60px", sm: "50px", md: "0px" },
          }}
        >
          <Typography className={classes.logoImage}>
            <img src={logo} width="100px" height="35px" />
          </Typography>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
          className={classes.searchElement}
        >
          <Typography>
            <img src={car} width="12px" />
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "12px" }}
          >
            Select Vechicle
          </Typography>
          <Typography className={classes.select}>
            <UnfoldMoreIcon fontSize="12px" />
          </Typography>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
              md: "flex",
            },
          }}
        >
          <Box className={classes.searchBar}>
            <Typography sx={{ fontSize: "12px" }}>
              Enter Keyword or Part Number
            </Typography>
            <SearchIcon />
          </Box>
        </Box>
      </Box>
      <Box
        className={classes.grantChild}
        sx={{
          paddingLeft: { sm: "200px", md: "0px" },
        }}
      >
        <Box>
          <Typography
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <Badge badgeContent={0} showZero className={classes.badge}>
              <FavoriteBorderIcon color="action" sx={{ fontSize: "20px" }} />
            </Badge>
          </Typography>
        </Box>
        <Box className={classes.profile}>
          <Box>
            <img src={profile} width="20px" />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "12px" }}>Hello,Log in</Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", fontSize: "12px" }}
              className={classes.fontBolder}
            >
              My Account
            </Typography>
          </Box>
        </Box>
        <Box className={classes.cart}>
          <Box>
            <Badge badgeContent="7" className={classes.badge}>
              <img src={Shoppingcart} width="20px" />
            </Badge>
          </Box>
          <Box
            sx={{
              paddingRight: {
                xs: "20px",
                sm: "10px",
              },
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>Shopping Cart</Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", fontSize: "12px" }}
            >
              ₹1468.60
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Header_searchbar;
