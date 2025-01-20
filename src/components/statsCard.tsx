import { Button, Typography } from "@mui/material";
import { statsCardStyles } from "./statsCard.styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const StatsCard = ({ flex, title, buttonText,img }) => {
  const { classes } = statsCardStyles({ flex: flex });
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography>{title}</Typography>
        <Button className={classes.button} endIcon={<MdOutlineKeyboardArrowDown />}>{buttonText}</Button>
      </div>
      <div className={classes.body}>
        <img src={require(`../assets/${img}`)} alt="" />
      </div>
    </div>
  );
};

export default StatsCard;
