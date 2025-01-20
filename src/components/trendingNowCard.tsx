import { Typography } from "@mui/material";
import { trendingNowCardStyles } from "./trendingNowCard.styles";
import { FaArrowTrendUp } from "react-icons/fa6";

const TrendingNowCard = () => {
  const { classes } = trendingNowCardStyles();
  return (
    <div className={classes.root}>
      <div className={classes.trendingNow}>
        <Typography className={classes.title}>Trending Now</Typography>
        <div className={classes.cardFooter}>
          <FaArrowTrendUp color="#4CAF50" />
          <Typography className={classes.increase}>{`+12%`}</Typography>
          <Typography className={classes.footerText}>vc yesterday</Typography>
        </div>
      </div>
      <div className={classes.footer}>
        <Typography fontSize={15}>Single Color Blazer</Typography>
        <Typography fontSize={15}>$499.99</Typography>
      </div>
    </div>
  );
};

export default TrendingNowCard;
