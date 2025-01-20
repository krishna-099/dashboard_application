import { loginPageStyles } from "./loginPage.styles";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import LoginForm from "src/components/loginForm";
import LoginButton from "src/components/loginButton";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

const LoginPage = () => {
  const { classes } = loginPageStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.loginCard}>
        <div className={classes.header}>
          <img
            src={require("../assets/logo.png")}
            className={classes.logo}
            alt=""
          />
          <Typography variant="h5" fontWeight={500}>
            {t("login.title")}
          </Typography>
          <div className={classes.subTitleContainer}>
            <Typography variant="inherit" fontSize={12}>
              {t("login.subTitleLine1")}
            </Typography>
            <Typography variant="inherit" fontSize={12}>
              {t("login.subTitleLine2")}
            </Typography>
          </div>
        </div>
        <div className={classes.body}>
          <LoginForm />
          <LoginButton
            type="button"
            buttonText={t("login.otherSignInOptions.google")}
            icon={<FcGoogle size={18} />}
            backgroundColor="#eaeaea61"
            borderColor="#e4dede"
          />
          <LoginButton
            type="button"
            icon={<FaTwitter size={18} color="#1DA1F2" />}
            buttonText={t("login.otherSignInOptions.twitter")}
            backgroundColor="#eaeaea61"
            borderColor="#e4dede"
          />
          <div className={classes.footerTextContainer}>
            <Typography variant="inherit" fontSize={12}>
              {t("login.alreadyHaveAccount")}
            </Typography>
            <Typography variant="inherit" fontSize={12} color="#157575">
              {t("login.buttons.signUp")}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
