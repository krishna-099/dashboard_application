import { IconButton, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import LoginButton from "./loginButton";
import { loginFormStyles } from "./loginForm.styles";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginForm = () => {
  const { control, handleSubmit } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
  }});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const { classes } = loginFormStyles();
  const { t } = useTranslation();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigateToLandingPage = () => {
    navigate("/landing-page");
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigateToLandingPage();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError(t("login.errors.emailRequired"));
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError(t("login.errors.invalidEmail"));
      return false;
    }
    setEmailError("");
    return true;
  };
  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError(t("login.errors.passwordRequired"));
      return false;
    }
    if (password.length < 6) {
      setPasswordError(t("login.errors.passwordMinLength"));
      return false;
    }
    setPasswordError("");
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
      <div className={classes.fieldsContainer}>
        <Typography variant="inherit" className={classes.fieldNames}>
          {t("login.fields.email")}
        </Typography>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            validate: validateEmail,
          }}
          render={({ onChange, ...rest }) => (
            <input
              value={rest.value}
              type="text"
              id="email"
              onChange={(e) => onChange(e.target.value)}
              className={classes.root}
            />
          )}
        />
        <Typography variant="inherit" className={classes.errorText}>
          {emailError}
        </Typography>
      </div>
      <div className={classes.fieldsContainer}>
        <Typography variant="inherit" className={classes.fieldNames}>
          {t("login.fields.password")}
        </Typography>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            validate: validatePassword,
          }}
          render={({ onChange, ...rest }) => (
            <div className={classes.passwordContainer}>
              <input
                value={rest.value}
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={(e) => {onChange(e.target.value)
                  setPassword(e.target.value)
                }}
                className={classes.root}
              />
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
                className={classes.passwordToggle}
              >
                {showPassword ? (
                  <FaEye fontSize={16} />
                ) : (
                  <FaEyeSlash fontSize={16} />
                )}
              </IconButton>
            </div>
          )}
        />
        <Typography variant="inherit" className={classes.errorText}>
          {passwordError}
        </Typography>
      </div>
      <LoginButton
        type="submit"
        buttonText={t("login.buttons.signIn")}
        backgroundColor="#157575"
        textColor="#fff"
      />
    </form>
  );
};

export default LoginForm;
