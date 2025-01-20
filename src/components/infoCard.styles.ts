import { makeStyles } from "tss-react/mui";

export const infoCardStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    height: "120px",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
  },
  container: {
    display: "flex",
    width: "40%",
    padding: "5%",
    gap: "5px",
    flexDirection: "column",
  },
  iconContainer: {
    backgroundColor: "#52c5f4",
    display: "flex",
    height: "15px",
    justifyContent: "center",
    width: "15px",
    alignItems: "center",
    borderRadius: "4px",
    color: "#fff",
  },
  title: {
    textWrap: "nowrap",
    marginLeft:"10px",
    fontSize: "10px",
    color: "#a49f9f",
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
  },
  cardBody: {},
  cardFooter: {
    display: "flex",
    gap: "5px",
    textWrap: "nowrap",
  },
  footerText:{
    fontSize: "10px",
    color: "#b4b0b0",
  },
  increase:{
    fontSize: "10px",
    color: "#4CAF50",
  },
    decrease:{
        fontSize: "10px",
        color: "#D32F2F",
    }
}));
