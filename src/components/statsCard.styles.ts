import { makeStyles } from "tss-react/mui";
interface StyleProps {
  flex: number;
}

export const statsCardStyles = makeStyles<StyleProps>()((theme, props) => ({
  root: {
    display: "flex",
    height: "240px",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    flex: props.flex,
    flexDirection: "column",
  },
  header: {
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    padding: "10px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "fill",
    },
  },
  button: {
    backgroundColor: "#eaeaea61",
    border: " 1px solid #e4dede",
    textTransform: "none",
    height: "25px",
    minWidth: "50px",
    fontSize: "10px",
    color: "#808080c4",
    padding: "15px",
    borderRadius: "10px",
    "& .MuiButton-endIcon": {
      marginTop: "-2px",
    },
  },
}));
