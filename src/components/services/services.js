import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import freeShipping from "../../assets/images/svg/free-delivery.svg";
import customerSupport from "../../assets/images/svg/24-hours.svg";
import payment from "../../assets/images/svg/payment-security.svg";
import hotOffers from "../../assets/images/svg/tag.svg";
import useStyles from "./servicesStyle";
import ImageListItem from "@mui/material/ImageListItem";

const Services = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Box
        className={classes.parent}
        sx={{
          display: { xs: "none", md: "flex" },
          marginLeft: { md: "30px", lg: "150px" },
        }}
      >
        <Box className={classes.child}>
          <Box>
            <img src={freeShipping} />
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "15px", paddingLeft: "10px" }}
            >
              Free Shipping
            </Typography>
            <Typography
              sx={{ fontSize: "10px", color: "#888888", paddingLeft: "10px" }}
            >
              For orders from $50
            </Typography>
          </Box>
        </Box>
        <Box className={classes.child}>
          <Box>
            <img src={customerSupport} />
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "15px", paddingLeft: "10px" }}
            >
              Support 24/7
            </Typography>
            <Typography
              sx={{ fontSize: "10px", color: "#888888", paddingLeft: "10px" }}
            >
              Call us anytime
            </Typography>
          </Box>
        </Box>
        <Box className={classes.child}>
          <Box>
            <img src={payment} />
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "15px", paddingLeft: "10px" }}
            >
              100% Safety
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                color: "#888888",
                paddingLeft: "10px",
                stroke: "blue",
              }}
            >
              Only secure payments
            </Typography>
          </Box>
        </Box>
        <Box className={classes.child}>
          <Box>
            <img src={hotOffers} />
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "15px", paddingLeft: "10px" }}
            >
              Hot Offers
            </Typography>
            <Typography
              sx={{ fontSize: "10px", color: "#888888", paddingLeft: "10px" }}
            >
              {" "}
              Discounts up to 90%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Services;
