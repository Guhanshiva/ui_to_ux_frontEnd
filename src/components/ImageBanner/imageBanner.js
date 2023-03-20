import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import motoroil from "../../assets/images/banner1.jpeg";
import carImage from "../../assets/images/banner2.jpeg";
import { useStyles } from "./imagebannerStyle";

const Image_banner = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Box
        className={classes.parent}
        sx={{
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Box className={classes.imagesChild}>
          <img src={motoroil} width="550px" />
          <Box className={classes.fontChild}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#fedf41", fontSize: "25px" }}
            >
              MOTOR OILS
            </Typography>
            <Typography sx={{ color: "white", width: "300px" }}>
              Synthetic motor oil with free shipping Friction free life
              guaranteed
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#e32828",
                width: "100px",
                textAlign: "center",
                color: "white",
              }}
            >
              Shop Now
            </Typography>
          </Box>
        </Box>
        <Box className={classes.imagesGrant}>
          <img src={carImage} width="550px" />
          <Box className={classes.fontGrantChild}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#fedf41", fontSize: "25px" }}
            >
              SAVE UP TO $40
            </Typography>
            <Typography sx={{ color: "white", width: "300px" }}>
              Luxurious interior part for real aesthetes Leather, fabric, ivory
              and more.
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#e32828",
                width: "100px",
                textAlign: "center",
                color: "white",
              }}
            >
              Shop Now
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Image_banner;
