import { makeStyles } from "tss-react/mui";
export const trendingNowCardStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    height: "240px",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    flex: 1,
    flexDirection: "column",
    backgroundImage: `url(${require("../assets/trending.png")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    justifyContent: "space-between",
  },
  cardFooter: {
    display: "flex",
    gap: "5px",
    textWrap: "nowrap",
  },
  footerText: {
    fontSize: "10px",
    color: "black",
  },
  increase: {
    fontSize: "10px",
    color: "#4CAF50",
  },
  title: {
    fontSize: "17px",
    marginTop: "15px",
  },
  trendingNow: {
    display: "flex",
    flexDirection: "column",
    height: "70px",
    borderRadius: "15px",
    width: "120px",
    gap: "6px",
    marginLeft: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginTop: "15px",
  },
  footer: {
    marginLeft: "15px",
  },
}));
