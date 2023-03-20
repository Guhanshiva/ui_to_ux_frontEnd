import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import quickview from "../../assets/images/svg/quickview.svg";
import cart from "../../assets/images/svg/cart-20.svg";
import useStyles from "./featuredProductListStyle";
import { useEffect } from "react";
import Rating from "@mui/material/Rating";
import { baseUrl } from "../../utils/constants";

const Featured_productlist = () => {
  const classes = useStyles();
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(baseUrl + "/api/view/?category=Featured_Products")
      .then((res) => res.json())
      .then((datas) => setdata(datas), []);
    // console.log(data);
  });
  return (
    // <>
    <Box
      className={classes.fetchingparent}
      sx={{
        display: { xs: "flex", sm: "grid", md: "grid", lg: "flex" },

        flexDirection: { xs: "column", sm: "row", md: "row", lg: "flex" },
        gridTemplateColumns: { sm: "1fr 1fr 1fr", md: "1fr 1fr 1fr" },
        marginLeft: { xs: "5px", md: "50px" },
      }}
    >
      {data.map((value, index) => {
        return (
          <Box className={classes.fetchingChild}>
            <Grid container>
              <Box className={classes.parent}>
                <Box className={classes.quickViewSection}>
                  <Typography></Typography>
                  <Typography>
                    <img src={quickview} backgroundColor="#ededed" />
                  </Typography>
                </Box>
                <Box className={classes.imageSection}>
                  <img src={value.image} width="200px" height="200px" />
                </Box>
                <Box className={classes.subTitle}>
                  <Typography sx={{ fontSize: "10px" }}>
                    {value.sub_title}
                  </Typography>
                </Box>
                <Box className={classes.heading}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    {value.title}
                  </Typography>
                </Box>
                <Box className={classes.ratingRaviewParent}>
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
                <Box className={classes.discountparent}>
                  <Box className={classes.discountchild}>
                    <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
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
                  <Box>
                    <img src={cart} color="#ededed" backgroundColor="#ededed" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        );
      })}
    </Box>
    // </>
  );
};

export default Featured_productlist;
