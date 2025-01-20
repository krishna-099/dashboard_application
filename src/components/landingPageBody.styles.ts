import { makeStyles } from "tss-react/mui";

export const landingPageBodyStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    gap: "30px",
    overflowY:"auto",
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#88888875",
      borderRadius: "6px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#555",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#f0f0f0",
        borderRadius: "6px",
      },
  },
  firstRow: {
    display: "flex",
    width: "100%",
    gap: "30px",
  },
  secondRow: {
    display: "flex",
    width: "100%",
    gap: "30px",
  },
  item: {},
}));
