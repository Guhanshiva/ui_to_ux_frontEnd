import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import imageSlider from "../../assets/images/slide-1.jpeg";
import { useStyles } from "./imageCorouselStyle";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: imageSlider,
  },
  {
    imgPath: imageSlider,
  },
  {
    imgPath: imageSlider,
  },
];

function Image_carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: "100vw",
        flexGrow: 1,
        display: {
          lg: "block",
          xs: "none",
        },
      }}
    >
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  height: "400px",
                  marginLeft: "50px",
                  marginRight: "50px",
                  display: "block",
                  maxWidth: "91vw",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 450,
                    display: "block",
                    maxWidth: "100vw",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Box className={classes.mainGrid}>
                  <Typography
                    className={classes.offers}
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    30% OFF
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "50px",
                    }}
                  >
                    When Buying Parts With Installation
                  </Typography>
                  <Typography className={classes.services}>
                    Installation of parts in the services of our partners.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#01dc9a" }}
                    className={classes.buttonShopNow}
                  >
                    Shop Now
                  </Button>
                </Box>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          ></Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default Image_carousel;
