import { Button } from "@mui/material";
import { loginButtonStyles } from "./loginButton.styles";

interface IButtonProps {
  buttonText: string | React.ReactNode;
  type: "button" | "submit" | "reset";
  clickHandler?: () => void;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  icon?: React.ReactNode;
}
const LoginButton = (props: IButtonProps) => {
  const { classes } = loginButtonStyles({
    color: props.textColor,
    backgroundColor: props.backgroundColor,
    borderColor: props.borderColor,
  });
  return (
    <Button
      startIcon={props.icon}
      type={props.type}
      onClick={props.clickHandler}
      className={classes.root}
    >
      {props.buttonText}
    </Button>
  );
};

export default LoginButton;
