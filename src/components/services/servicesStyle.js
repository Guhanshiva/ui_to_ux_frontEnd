import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "10px",
    paddingRight: "10px",
    width: "900px",
    marginLeft: "150px",
    marginTop: "50px",
  },
  child: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "160px",
  },
}));
export default useStyles;
