import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "91vw",
    marginLeft: "50px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  shopCategory: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    height: "20px",
    gap: "10px",
  },
  child: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "20px",

    gap: "5px",
  },
  navLists: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  downIcon: {
    backgroundColor: "white",
    color: "grey",
  },
  contacts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
export { useStyles };
