import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginLeft: "50px",
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "absolute",
    top: 20,
    left: 20,
    width: "500px",
  },
  offers: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    width: "100px",
    height: "30px",
  },
  services: {
    color: " grey",
  },
  buttonShopNow: {
    width: "150px",
    backgroundColor: "#01dc9a",
    color: "white",
  },
}));

export { useStyles };
