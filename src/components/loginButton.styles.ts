import { makeStyles } from "tss-react/mui";

interface StyleProps {
  color: string;
  backgroundColor: string;
  borderColor: string;
}
export const loginButtonStyles = makeStyles<StyleProps>()((theme, props) => ({
  root: {
    width: "300px",
    height: "40px",
    border: `${props.borderColor ? `2px solid ${props.borderColor}` : "none"}`,
    backgroundColor: props.backgroundColor ?? "#f3f3f3",
    color: props.color ?? "#000",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: 500,
    textTransform: "none",
  },
}));
