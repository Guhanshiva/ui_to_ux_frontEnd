import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px",
    width: "87vw",
    borderBottom: "1px solid #ededed",
    marginTop: "50px",
    marginLeft: "50px",
    marginBottom: "50px",
  },
  imagesChild: {
    position: "relative",
  },
  fontChild: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "absolute",
    marginLeft: "20px",
    height: "150px",
    width: "250px",
    top: "20px",
  },
  fontGrantChild: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "absolute",
    marginLeft: "100px",
    height: "150px",
    width: "250px",

    top: "20px",
    right: "280px",
  },
  imagesGrant: {
    position: "relative",
  },
}));
export { useStyles };
