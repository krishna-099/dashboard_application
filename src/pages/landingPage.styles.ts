import { makeStyles } from "tss-react/mui";
export const landingPageStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f8f7f1",
  },
  container: {
    display: "flex",
    padding: "1rem",
    width: "100%",
    gap: "10px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "10px",
  },
}));
