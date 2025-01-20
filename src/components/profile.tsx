import { Avatar, Typography } from "@mui/material";
import { profileStyles } from "./profile.styles";

const Profile = () => {
  const { classes } = profileStyles();
  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src="https://material-ui.com/static/images/avatar/1.jpg"
      />
      <div className={classes.details}>
        <Typography fontSize={14}>Dusan K.</Typography>
        <Typography fontSize={10}>Admin</Typography>
      </div>
    </div>
  );
};
export default Profile;
