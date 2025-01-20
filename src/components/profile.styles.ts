import { makeStyles } from "tss-react/mui";

export const profileStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  details:{
    display: "flex",
    flexDirection: "column",
  }
}));
