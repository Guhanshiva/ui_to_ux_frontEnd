import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "40px",
  },
  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "50px",

    gap: "10px",
  },
  navBar_rightSide_portion: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    height: "20px",
    color: "#bfbfbf",
    marginRight: "50px",
  },
  spanElement: {
    color: "black",
    fontWeight: "bold",
    fontSize: "11px",
  },
  currencyElement: {
    display: "flex",
    alignItems: "center",
  },
}));

export { useStyles };
