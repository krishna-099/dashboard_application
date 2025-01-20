import { collapsibleSideMenuStyles } from "./collapsibleSideMenu.styles";
import { MdDashboard } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCommentBank } from "react-icons/md";
import { MdListAlt } from "react-icons/md";
import { PiBag } from "react-icons/pi";
import { Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const menuItems = {
  dashBoard: {
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  products: {
    name: "Products",
    icon: <PiBag />,
  },
  orders: {
    name: "Orders",
    icon: <MdListAlt />,
  },
  sales: {
    name: "Sales",
    icon: <MdDashboard />,
  },
  reviews: {
    name: "Reviews",
    icon: <MdOutlineCommentBank />,
  },
};

const otherItems = {
  settings: {
    name: "Settings",
    icon: <IoSettingsOutline />,
  },
  logout: {
    name: "Logout",
    icon: <IoLogOutOutline fontSize={"medium"} />,
  },
};

const CollapsibleSideMenu = (props) => {
  const { classes } = collapsibleSideMenuStyles({
    expand: props.expand,
  });
  const navigate = useNavigate();
  const navigateToLoginPage = () => {
    navigate("/");
  };
  return (
    <div className={classes.root}>
      <img
        src={require("../assets/logo_side_menu.png")}
        className={classes.logo}
        alt=""
      />
      <Typography fontSize={10} color={"#cacaca"}>
        {" "}
        MENU
      </Typography>
      <div className={classes.menuItems}>
        {Object.keys(menuItems).map((key) => {
          return (
            <div key={key}>
              <div className={classes.menuItem} key={key}>
                {menuItems[key].icon}
                <div
                  className={`${classes.menuText} ${props.expand ? classes.expanded : ""
                    }`}
                >
                  {menuItems[key].name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Divider
        sx={{
          borderColor: "#cacaca",
          width: "100%",
        }}
      />
      <Typography fontSize={10} color={"#cacaca"}>
        {" "}
        OTHER
      </Typography>
      <div className={classes.menuItems}>
        {Object.keys(otherItems).map((key) => {
          return (
            <div
              className={classes.menuItem}
              key={key}
              onClick={key === "logout" ? navigateToLoginPage : null}
            >
              {otherItems[key].icon}
              <div
                className={`${classes.menuText} ${props.expand ? classes.expanded : ""
                  }`}
              >
                {otherItems[key].name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollapsibleSideMenu;
