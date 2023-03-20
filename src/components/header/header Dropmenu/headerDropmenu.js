import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useStyles } from "./headerDropmenuStyle";

const Header_dropmenu = () => {
  const classes = useStyles();
  return (
    <Box
      container
      className={classes.parent}
      sx={{
        display: {
          lg: "flex",
          xs: "none",
        },
      }}
    >
      <Box className={classes.shopCategory}>
        <Typography>
          <MenuIcon sx={{ width: "15px" }} />
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", marginRight: "30px", fontSize: "12px" }}
        >
          Shop By Category
        </Typography>
        <KeyboardArrowDownIcon
          sx={{ width: "15px" }}
          className={classes.downIcon}
        />
      </Box>
      <Box className={classes.child}>
        <Box className={classes.navLists}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "12px" }}
          >
            Home
          </Typography>
          <KeyboardArrowDownIcon
            sx={{ width: "15px" }}
            className={classes.downIcon}
          />
        </Box>
        <Box className={classes.navLists}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "12px" }}
          >
            Megamenu
          </Typography>
          <KeyboardArrowDownIcon
            sx={{ width: "15px" }}
            className={classes.downIcon}
          />
        </Box>
        <Box className={classes.navLists}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "12px" }}
          >
            Shop
          </Typography>
          <KeyboardArrowDownIcon
            sx={{ width: "15px" }}
            className={classes.downIcon}
          />
        </Box>
        <Box className={classes.navLists}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "12px" }}
          >
            Blog
          </Typography>
          <KeyboardArrowDownIcon
            sx={{ width: "15px" }}
            className={classes.downIcon}
          />
        </Box>
        <Box className={classes.navLists}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "12px" }}
          >
            Account
          </Typography>
          <KeyboardArrowDownIcon
            sx={{ width: "15px" }}
            className={classes.downIcon}
          />
        </Box>
        <Box className={classes.navLists}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "12px" }}
          >
            pages
          </Typography>
          <KeyboardArrowDownIcon
            sx={{ width: "15px" }}
            className={classes.downIcon}
          />
        </Box>
        <Box className={classes.navLists}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "12px" }}
          >
            BuyTheme
          </Typography>
          <KeyboardArrowDownIcon
            sx={{ width: "15px" }}
            className={classes.downIcon}
          />
        </Box>
      </Box>
      <Box className={classes.grantChild}>
        <Box className={classes.contacts}>
          <Typography sx={{ fontSize: "12px" }}>Call Us:</Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "12px" }}
          >
            089252 97807
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header_dropmenu;
