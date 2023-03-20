import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    justifyContent: "center",
    width: "500px",
    height: "350px",
    borderBottom: "1px solid #ededed",
  },
  child: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "50px",
    marginRight: "50px",
    height: "125px",
  },
  productsList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "125px",
    border: "1px solid #ededed",
    borderBottom: "none",
    marginTop: "25px",
    padding: "10px",
    color: "#888888",
  },
  productsLists: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "125px",
    border: "1px solid #ededed",
    padding: "10px",
    color: "#888888",
    marginTop: "0px",
  },
  grantChild: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "50px",
    marginRight: "50px",
    height: "125px",
  },
  container: {
    backgroundColor: "#888888",
  },
  image: {
    filter: "grayscale(100%)",
    paddingBottom: "10px",
  },
}));
export { useStyles };
