import React from "react";
import { Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import { useStyles } from "./header.navbar.style";
import Link from "@mui/material/Link";

const Header_navbar = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      sx={{
        textAlign: { xs: "center" },
        display: { md: "flex" },
      }}
      className={classes.mainGrid}
    >
      <Box
        className={classes.navBar}
        sx={{
          paddingRight: {
            xs: "50px",
            sm: "0px",
            md: "0px",
          },
          paddingLeft: { sm: "200px", md: "0px" },
          fontSize: "12px",
        }}
      >
        <Link to="/About Us" underline="none" color="#bfbfbf">
          About Us
        </Link>
        <Link to="/Contacts" underline="none" color="#bfbfbf">
          Contacts
        </Link>
        <Link to="/Store Location" underline="none" color="#bfbfbf">
          Store Location
        </Link>
        <Link to="/Track Order" underline="none" color="#bfbfbf">
          Track Order
        </Link>
        <Link to="/Blog" underline="none" color="#bfbfbf">
          Blog
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
        component={"Span"}
        className={classes.navBar_rightSide_portion}
      >
        <Typography sx={{ fontSize: "12px" }}>
          Compare:<span className={classes.spanElement}>2</span>
        </Typography>
        <Typography
          sx={{ fontSize: "12px" }}
          className={classes.currencyElement}
        >
          Currency:<span className={classes.spanElement}>RS</span>
          <KeyboardArrowDownIcon
            sx={{ fontSize: "15px" }}
            className={classes.downArrow}
          />
        </Typography>
        <Typography
          sx={{ fontSize: "12px" }}
          className={classes.currencyElement}
        >
          Language:<span className={classes.spanElement}>EN</span>
          <KeyboardArrowDownIcon
            sx={{ fontSize: "15px" }}
            className={classes.downArrow}
          />
        </Typography>
      </Box>
    </Grid>
  );
};

export default Header_navbar;
