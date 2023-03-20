import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // marginLeft: "50px",
    // marginRight: "50px",
    width: "90vw",
    height: "50px",
    borderTop: "1px solid #ededed",
  },
  grantChild: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
  },
  allWord: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
    color: "white",
    width: "40px",
    height: "20px",
  },
  arrows: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    color: "white",
  },
  arrowParentDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
  },
}));

export { useStyles };
