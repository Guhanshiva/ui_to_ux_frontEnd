import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    flexDirection: "column",
    alignmentBaseline: "center",
    width: "215px",
    height: "330px",
    justifyContent: "center",
    // justifyContent: "space-between",
    // backgroundColor: "red",
    border: "1px solid #ededed",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2);",
  },
  quickViewSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  imageSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "10px",
  },
  subTitle: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    color: "#888888",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  ratingRaviewParent: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    paddingLeft: "10px",
    color: "#888888",
  },
  discountparent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "10px",
  },
  discountchild: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  fetchingparent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "87vw",
    marginLeft: "100px",
    borderTop: "1px solid #ededed",
    paddingTop: "20px",
    // backgroundColor: "red",
  },
  fetchingChild: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
  },
}));
export default useStyles;
