import { makeStyles } from "tss-react/mui";

export const loginFormStyles = makeStyles()((theme) => ({
  root: {
    width: "278px",
    height: "40px",
    border: `2px solid #e4dede`,
    backgroundColor: "#eaeaea61",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: 500,
    color: "#00000094",
    padding: "0px 10px",
  },
  fieldNames: {
    color: "#000000a8",
    fontWeight: 500,
    fontSize: "12px",
    padding: "0px 0px 0px 6px",
  },
  fieldsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  passwordContainer:{
    display: "flex",
    flexDirection: "row",
  },
  passwordToggle:{
    position: "relative",
    left: "-35px",
  },
  errorText: {
    fontSize: "10px",
    color: "#ff0000",
    height: "10px",
  }
}));
