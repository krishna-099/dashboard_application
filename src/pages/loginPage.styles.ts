import { makeStyles } from "tss-react/mui";
export const loginPageStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: "#f8f7f1",
  },
  logo: {
    height: "50px",
    width: "65px",
  },
  loginCard: {
    backgroundColor: "#fff",
    padding: "2rem 1.5rem",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  subTitleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#000000a8",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  footerTextContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: "6px",
    color: "#000000a8",
  },
}));
