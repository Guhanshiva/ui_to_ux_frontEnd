import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import quickSearch from "../../assets/images/svg/quickview.svg";
import { useStyles } from "./productStyle";
import { useEffect } from "react";
import Rating from "@mui/material/Rating";
import { baseUrl } from "../../utils/constants";

const Product = () => {
  const classes = useStyles();
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(baseUrl + "/api/view/?category=Top_Products")
      .then((res) => res.json())
      .then((datas) => setdata(datas), []);
    console.log(data);
  });
  return (
    <Box className={classes.mainGrid}>
      <Typography
        sx={{
          fontWeight: "bold",
          paddingLeft: "50px",
          display: { xs: "none", sm: "flex" },
          flexDirection: { xs: "none", sm: "column" },
          paddingLeft: { md: "50px", lg: "150px" },
        }}
        className={classes.heading}
      >
        Top Rated Products
      </Typography>
      {data.map((value) => {
        return (
          <Grid container>
            <Box
              className={classes.element}
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
                flexDirection: { xs: "none", sm: "column", md: "column" },
                justifyContent: { lg: "" },
                // paddingLeft: { md: "0px", lg: "50px" },
              }}
            >
              <Box
                sx={{
                  width: { sm: "270px", md: "100px", lg: "330px" },
                }}
                className={classes.parent}
              >
                <Box>
                  <img src={value.image} width="100px" height="100px" />
                </Box>
                <Box className={classes.child}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Box className={classes.ratingParent}>
                    <Rating
                      defaultValue={1}
                      size="small"
                      value={value.ratings}
                      readOnly
                    />
                    <Typography sx={{ fontSize: "10px" }}>
                      {value.reviews}
                    </Typography>
                  </Box>
                  <Box className={classes.priceParent}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      {value.price_amount}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        paddingLeft: "5px",
                        textDecoration: "line-through",
                      }}
                    >
                      {value.discount_amount}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.quickIcon}>
                  <img src={quickSearch} />
                </Box>
              </Box>
            </Box>
          </Grid>
        );
      })}
      <SpecialOffers />
      <BestSellers />
    </Box>
  );
};

function SpecialOffers() {
  const classes = useStyles();
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(baseUrl + "/api/view/?category=special_offers")
      .then((res) => res.json())
      .then((datas) => setdata(datas), []);
    // console.log(data);
  });
  return (
    <Box className={classes.SpecialParent}>
      <Typography
        sx={{
          fontWeight: "bold",
          paddingLeft: "50px",
          display: { xs: "none", md: "flex" },
          flexDirection: { xs: "none", sm: "column", md: "column" },
        }}
        className={classes.heading}
      >
        Special Offers
      </Typography>

      {data.map((value, index) => {
        return (
          <Grid container>
            <Box
              className={classes.specialChild}
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: { xs: "none", sm: "column", md: "column" },
              }}
            >
              <Box
                sx={{
                  width: { md: "150px", lg: "330px" },
                  paddingRight: { lg: "10px" },
                  // marginLeft: { lg: "150px" },
                }}
                className={classes.parent}
              >
                <Box>
                  <img src={value.image} width="100px" height="100px" />
                </Box>
                <Box className={classes.child}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Box className={classes.ratingParent}>
                    <Rating
                      defaultValue={1}
                      size="small"
                      value={value.ratings}
                      readOnly
                    />
                    <Typography sx={{ fontSize: "10px" }}>
                      {value.reviews}
                    </Typography>
                  </Box>
                  <Box className={classes.priceParent}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      {value.price_amount}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        paddingLeft: "5px",
                        textDecoration: "line-through",
                      }}
                    >
                      {value.discount_amount}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.quickIcon}>
                  <img src={quickSearch} />
                </Box>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Box>
  );
}

function BestSellers() {
  const classes = useStyles();
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(baseUrl + "/api/view/?category=best_sellers")
      .then((res) => res.json())
      .then((datas) => setdata(datas), []);
    // console.log(data);
  });
  return (
    <Box className={classes.BestParent}>
      <Typography
        sx={{
          fontWeight: "bold",
          paddingLeft: "50px",
          display: { xs: "none", sm: "flex" },
          flexDirection: { xs: "none", sm: "column" },
        }}
        className={classes.heading}
      >
        Best Sellers
      </Typography>

      {data.map((value) => {
        return (
          <Grid container>
            <Box
              className={classes.specialChild}
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: { xs: "none", sm: "column" },
              }}
            >
              <Box
                className={classes.parent}
                sx={{
                  width: { sm: "270px", md: "200px", lg: "300px" },
                  // paddingRight: { lg: "50px" },
                }}
              >
                <Box>
                  <img src={value.image} width="100px" height="100px" />
                </Box>
                <Box className={classes.child}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Box className={classes.ratingParent}>
                    <Rating
                      defaultValue={1}
                      size="small"
                      value={value.ratings}
                      readOnly
                    />
                    <Typography sx={{ fontSize: "10px" }}>
                      {value.reviews}
                    </Typography>
                  </Box>
                  <Box className={classes.priceParent}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      {value.price_amount}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        paddingLeft: "5px",
                        textDecoration: "line-through",
                      }}
                    >
                      {value.discount_amount}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.quickIcon}>
                  <img src={quickSearch} />
                </Box>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Box>
  );
}

export default Product;
