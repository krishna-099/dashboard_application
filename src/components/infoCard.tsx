import { infoCardStyles } from "./infoCard.styles";
import { Typography } from "@mui/material";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
const InfoCard = ({ icon, title, value, percentIncrease }) => {
  const { classes } = infoCardStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.cardHeader}>
          <div className={classes.iconContainer}>{icon}</div>
          <Typography className={classes.title}>{title}</Typography>
        </div>
        <div className={classes.cardBody}>
          <Typography fontSize={35}>{value}</Typography>
        </div>
        <div className={classes.cardFooter}>
          {percentIncrease > 0 ? (
            <FaArrowTrendUp color="#4CAF50" />
          ) : (
            <FaArrowTrendDown color="#D32F2F" />
          )}
          <Typography
            className={
              percentIncrease > 0 ? classes.increase : classes.decrease
            }
          >{`${percentIncrease}%`}</Typography>
          <Typography className={classes.footerText}>vc yesterday</Typography>
        </div>
      </div>
      <div className={classes.container}>
        <img
          src={require(percentIncrease > 0
            ? "../assets/increase.png"
            : "../assets/decrease.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default InfoCard;
