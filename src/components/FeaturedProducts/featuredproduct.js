import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useStyles } from "./featuredProductListStyle";
const Featured_product = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Box
        className={classes.parent}
        sx={{
          marginTop: { xs: "20px", sm: "0px" },
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              marginLeft: { sm: "50px" },
            }}
          >
            Featured Products
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
          className={classes.grantChild}
        >
          <Box
            className={classes.allWord}
            style={{ transform: "skewX(-30deg)" }}
          >
            <Typography
              sx={{ fontSize: "12px" }}
              style={{ transform: "skewX(30deg)" }}
            >
              All
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#888888",
              fontSize: "12px",
            }}
          >
            Power Tools
          </Typography>
          <Typography
            sx={{
              color: "#888888",
              fontSize: "12px",
            }}
          >
            Hand Tools
          </Typography>
          <Typography
            sx={{
              color: "#888888",
              fontSize: "12px",
            }}
          >
            Plumbing
          </Typography>
          <Box className={classes.arrowParentDiv}>
            <Typography
              className={classes.arrows}
              style={{ transform: "skewX(-30deg)", backgroundColor: "#01dc9a" }}
            >
              <KeyboardArrowLeftIcon style={{ transform: "skewX(30deg)" }} />
            </Typography>
            <Typography
              className={classes.arrows}
              style={{ transform: "skewX(-30deg)", backgroundColor: "#01dc9a" }}
            >
              <KeyboardArrowRightIcon style={{ transform: "skewX(30deg)" }} />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Featured_product;
