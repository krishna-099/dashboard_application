import { makeStyles } from "tss-react/mui";

interface StyleProps {
  expand: boolean;
}
export const collapsibleSideMenuStyles = makeStyles<StyleProps>()(
  (theme, props) => ({
    root: {
      width: `${props.expand ? 170 : 40}px`,
      borderRadius: "10px",
      display: "flex",
      fontSize: "12px",
      backgroundColor: "#136767",
      textTransform: "none",
      transition: "width 0.3s ease-in-out",
      flexDirection: "column",
      padding: "10px",
      gap: "20px",
      alignItems: `${props.expand ? "" : "center"}`,
    },
    logo: {
      height: "30px",
      width: "40px",
    },
    menuItems: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",

    },
    menuItem: {
      display: "flex",
      flexDirection: "row",
      fontSize: "14px",
      color: "#cacaca",
      cursor: "pointer",
      alignItems: "center",
      minHeight: "18px",

    },
    menuText: {
      marginLeft: "10px",
      opacity: 0,
      display: "none",

      transition: "opacity 0.6s ease, display 0s 0.6s",
    },
    expanded: {
      visibility: "visible",
      opacity: 1,
      display: "block",
      transition: "opacity 0.6s ease, display 0s 0.6s",
    },
  })
);
