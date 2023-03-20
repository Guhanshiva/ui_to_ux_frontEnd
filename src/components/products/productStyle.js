import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "95vw",
    marginBottom: "50px",
    position: "relative",
  },
  element: {
    display: "flex",
    flexDirection: "column",
  },
  parent: {
    display: "flex",

    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px",
    width: "350px",
    height: "100px",
    border: "1px solid #ededed",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2);",
    marginLeft: "50px",
    padding: "5px",
    // boxShadow: "5px 0px",
  },
  ratingParent: {
    display: "flex",
    alignItems: "center",
  },
  priceParent: {
    display: "flex",
    alignItems: "center",
  },
  quickIcon: {
    filter: "grayscale(100%)",

    paddingTop: "10px",
    alignSelf: "flex-start",
  },
  child: {
    display: "flex",
    flexDirection: "column",
    width: "180px",
  },
  SpecialParent: {
    position: "absolute",
    right: "460px",
  },
  specialChild: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  BestParent: {
    position: "absolute",
    right: "110px",
  },
}));
export { useStyles };
