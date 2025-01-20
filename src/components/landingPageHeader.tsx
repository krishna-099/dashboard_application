import { landingPageHeaderStyles } from "./landingPageHeader.styles";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Divider, IconButton, Typography } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsBrightnessHigh } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import Profile from "./profile";

const LandingPageHeader = (props) => {
  const toggleMenuExpand = () => {
    props.setExpand(!props.expand);
  };
  const { classes } = landingPageHeaderStyles();
  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        {props.expand ? (
          <IconButton sx={{ padding: 0 }}>
            <BiMenuAltLeft
              fontSize={25}
              onClick={toggleMenuExpand}
              color="#136767"
            />
          </IconButton>
        ) : (
          <IconButton sx={{ padding: 0 }}>
            <IoIosArrowRoundForward
              fontSize={30}
              onClick={toggleMenuExpand}
              color="#136767"
            />
          </IconButton>
        )}
        <Typography fontSize={16}>Dashboard</Typography>
      </div>
      <div className={classes.rightContainer}>
        <IoIosSearch />
        <IoMdNotificationsOutline />
        <BsBrightnessHigh />
        <IoCartOutline />
        <Divider
          sx={{
            borderColor: "#cacaca",
            height: "30px",
          }}
          orientation="vertical"
        />
        <Profile />
      </div>
    </div>
  );
};

export default LandingPageHeader;
