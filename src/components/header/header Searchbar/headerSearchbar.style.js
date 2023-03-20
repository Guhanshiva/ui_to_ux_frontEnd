import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    alignItems: "center",
    width: "500px",
    justifyContent: "space-between",
    borderTop: "1px solid #ededed",
    borderBottom: "1px solid #ededed",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  child: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  grantChild: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    width: "300px",
  },
  searchElement: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "120px",
    height: "30px",
    backgroundColor: "yellow",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  select: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "300px",
    height: "30px",
    backgroundColor: "#ededed",
    color: "grey",
    height: "30px",
    paddingLeft: "10px",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  cart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  badge: {
    color: "#01dc9a",
  },
}));

export { useStyles };
