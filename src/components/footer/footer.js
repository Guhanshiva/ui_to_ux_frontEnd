import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import socialMediaImage from "../../assets/images/task crop.jpg";
import paymentimage from "../../assets/images/payments.png";
import useStyles from "./footerstyle";
import { fontWeight } from "@mui/system";

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Box
        sx={{
          display: { xs: "flex", sm: "grid", lg: "flex" },
          width: { xs: "400px", sm: "100vw", lg: "92vw" },
          height: { xs: "900px", sm: "600px", md: "600px", lg: "250px" },
          paddingLeft: { xs: "0px", sm: "50px", lg: "0px" },
          paddingRight: { lg: "100px" },
          paddingBottom: { lg: "50px" },
          marginLeft: { xs: "-70px", sm: "0px", lg: "px" },
          gridTemplateColumns: { sm: "1fr 1fr  " },
          marginTop: { lg: "50px" },

          flexDirection: { xs: "column", md: "row", lg: "row" },
        }}
        className={classes.parent}
      >
        <Box
          className={classes.child1}
          sx={{
            padding: { xs: "0px" },
            width: { xs: "200px", lg: "350px" },
            height: { lg: "190px" },
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "white", fontSize: "16px" }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              color: "#9e9e9e",
              fontSize: "11px",
              width: { lg: "300px" },
            }}
          >
            Hi, we are always open for cooperation and suggestions, contact us
            in one of the ways below:
          </Typography>
          <Box className={classes.phoneParent} sx={{ width: { lg: "310px" } }}>
            <Box>
              <Typography sx={{ color: "#9e9e9e", fontSize: "11px" }}>
                PHONE NUMBER
              </Typography>
              <Typography sx={{ color: "white", fontSize: "11px" }}>
                089252 97807
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#9e9e9e", fontSize: "11px" }}>
                EMAIL ADDRESS
              </Typography>
              <Typography sx={{ color: "white", fontSize: "11px" }}>
                careers@uitouxsolutions.com
              </Typography>
            </Box>
          </Box>
          <Box
            className={classes.locationParent}
            sx={{ width: { lg: "270px" } }}
          >
            <Box className={classes.locationChild}>
              <Typography sx={{ color: "#9e9e9e", fontSize: "11px" }}>
                OUR LOCATION
              </Typography>
              <Typography
                sx={{ height: "200px", color: "white", fontSize: "11px" }}
              >
                102, Athipalayam Rd,
                <br />
                Ramakrishnapuram,
                <br />
                Chinnavedampatti,
                <br />
                Coimbatore, Tamil Nadu
                <br />
                641049
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#9e9e9e", fontSize: "11px" }}>
                WORKING HOURS
              </Typography>
              <Typography sx={{ color: "white", fontSize: "11px" }}>
                Mon-Fri 10:00pm - 6:00pm
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.child2} sx={{ marginBottom: { xs: "0px" } }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "16px",
            }}
          >
            Information
          </Typography>
          <Typography
            sx={{
              color: "#9e9e9e",
              fontSize: "12px",
              marginTop: { xs: "20px" },
            }}
          >
            About Us
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Delivery Information
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Brands
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Contact Us
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Returns
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Site Map
          </Typography>
        </Box>
        <Box className={classes.child3} sx={{ marginBottom: { xs: "0px" } }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "16px",
            }}
          >
            My Account
          </Typography>
          <Typography
            sx={{
              color: "#9e9e9e",
              fontSize: "12px",
              marginTop: { xs: "20px" },
            }}
          >
            Store Location
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Order History
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Wish List
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Newsletter
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Special Offers
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Gift Certificates
          </Typography>
          <Typography sx={{ color: "#9e9e9e", fontSize: "10px" }}>
            Affiliate
          </Typography>
        </Box>
        <Box
          className={classes.child4}
          sx={{
            marginBottom: { xs: "0px" },
            width: { xs: "200px", lg: "250px" },
            height: { lg: "200px" },
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "white", fontSize: "16px" }}
          >
            Newsletter
          </Typography>
          <Typography
            sx={{
              color: "#9e9e9e",
              fontSize: "11px",
              marginTop: { xs: "20px" },
            }}
          >
            Enter your email address below to subscribe to our newsletter
            <br /> and keep up to date with discounts and special offers.
          </Typography>
          <Box
            className={classes.subscribeParent}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Typography
              className={classes.search}
              sx={{ color: "#9e9e9e", fontSize: "11px" }}
            >
              user@example.com
            </Typography>
            <Typography
              className={classes.subscribe}
              sx={{ color: "white", fontSize: "11px" }}
            >
              Subscribe
            </Typography>
          </Box>
          <Typography sx={{ color: "#9e9e9e", fontSize: "11px" }}>
            Follow us on social networks
          </Typography>
          <Typography>
            <img src={socialMediaImage} width="150px" />
          </Typography>
        </Box>
      </Box>
      <Box
        className={classes.paymentParent}
        sx={{
          display: { xs: "flex" },
          flexDirection: { xs: "column", sm: "row" },
          marginLeft: { xs: "0px" },
          height: { xs: "80px" },
          paddingLeft: { xs: "30px", sm: "30px", lg: "100px" },
          marginRight: { xs: "0px" },
          width: { xs: "240px", sm: "100vw", lg: "88.5vw" },
        }}
      >
        <Typography sx={{ color: "#9e9e9e", fontSize: "11px" }}>
          Powered by React / Next.js — Designed by UITOUX Solutions
        </Typography>
        <Typography>
          <img src={paymentimage} />
        </Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
