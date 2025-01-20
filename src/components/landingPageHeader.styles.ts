import { makeStyles } from "tss-react/mui";

export const landingPageHeaderStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "50px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer:{
    display: "flex",
    gap: "5px",
    alignItems: "center",
    flexDirection: "row",
  },
  rightContainer:{
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flexDirection: "row",
  }
}));
