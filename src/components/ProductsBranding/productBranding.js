import React from "react";
import { Grid, Box, Typography, ImageList } from "@mui/material";
import { useStyles } from "./productBrandingStyle";
import Brand1 from "../../assets/images/brand-1.png";
import Brand2 from "../../assets/images/brand-2.png";
import Brand3 from "../../assets/images/brand-3.png";
import Brand4 from "../../assets/images/brand-4.png";
import Brand5 from "../../assets/images/brand-5.png";
import Brand6 from "../../assets/images/brand-6.png";
import Brand7 from "../../assets/images/brand-7.png";
import Brand8 from "../../assets/images/brand-8.png";
import Brand9 from "../../assets/images/brand-9.png";
import Brand10 from "../../assets/images/brand-10.png";
import Brand11 from "../../assets/images/brand-11.png";
import Brand12 from "../../assets/images/brand-12.png";
import Brand13 from "../../assets/images/brand-13.png";
import Brand14 from "../../assets/images/brand-14.png";
import Brand15 from "../../assets/images/brand-15.png";
import Brand16 from "../../assets/images/brand-16.png";

const Product_branding = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.parent}
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
        width: { lg: "1180px" },
        marginLeft: { lg: "100px" },
      }}
    >
      <Box
        className={classes.child}
        sx={{
          display: { sm: "flex", lg: "flex" },
        }}
      >
        <Box className={classes.productsList}>
          <img
            src={Brand1}
            className={classes.image}
            height="50px"
            color="#888888"
            backgroundColor="#888888"
          />
          <Typography
            sx={{
              fontSize: "10px",
            }}
          >
            AIMPARTS
          </Typography>
        </Box>
        <Box className={classes.productsList}>
          <img className={classes.image} src={Brand2} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>WINDENGINE</Typography>
        </Box>
        <Box
          className={classes.productsList}
          sx={{
            display: {
              sm: "none",
              md: "flex",
            },
          }}
        >
          <img src={Brand3} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>TURBOELECTRIC</Typography>
        </Box>
        <Box
          className={classes.productsList}
          sx={{
            display: {
              sm: "none",
              md: "flex",
            },
          }}
        >
          <img src={Brand4} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>STARTONE</Typography>
        </Box>
        <Box
          sx={{
            display: {
              sm: "none",
              md: "flex",
            },
          }}
          className={classes.productsList}
        >
          <img src={Brand5} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>BRANDIX</Typography>
        </Box>
        <Box className={classes.productsList}>
          <img src={Brand6} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>ABS-BRAND</Typography>
        </Box>
        <Box className={classes.productsList}>
          <img src={Brand7} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>GREATCIRCLE</Typography>
        </Box>
        <Box className={classes.productsList}>
          <img src={Brand8} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>JUSTROMB</Typography>
        </Box>
      </Box>
      <Box
        className={classes.grantChild}
        sx={{
          display: { xs: "", sm: "flex", lg: "flex" },
        }}
      >
        <Box
          className={classes.productsLists}
          sx={{
            display: {
              sm: "none",
              md: "flex",
            },
          }}
        >
          <img src={Brand9} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>FASTWHEELS</Typography>
        </Box>
        <Box
          className={classes.productsLists}
          sx={{
            display: {
              sm: "none",
              md: "flex",
            },
          }}
        >
          <img src={Brand10} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>STROYKA-X</Typography>
        </Box>
        <Box
          sx={{
            display: {
              sm: "none",
              md: "flex",
            },
          }}
          className={classes.productsLists}
        >
          <img src={Brand11} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>MISSION-51</Typography>
        </Box>
        <Box className={classes.productsLists}>
          <img src={Brand12} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>FUELCORP</Typography>
        </Box>
        <Box className={classes.productsLists}>
          <img src={Brand13} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>REDGATE</Typography>
        </Box>
        <Box className={classes.productsLists}>
          <img src={Brand14} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>BLOCKS</Typography>
        </Box>
        <Box className={classes.productsLists}>
          <img src={Brand15} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>BLACKBOX</Typography>
        </Box>
        <Box className={classes.productsLists}>
          <img src={Brand16} className={classes.image} height="50px" />
          <Typography sx={{ fontSize: "10px" }}>SQUAREGARAGE</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Product_branding;
