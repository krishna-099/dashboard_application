import { landingPageBodyStyles } from "./landingPageBody.styles";
import InfoCard from "./infoCard";
import { FaWallet } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiSolidDownload } from "react-icons/bi";
import { MdShoppingBag } from "react-icons/md";
import StatsCard from "./statsCard";
import TrendingNowCard from "./trendingNowCard";

const LandingPageBody = () => {
  const { classes } = landingPageBodyStyles();
  return (
    <div className={classes.root}>
      <div className={classes.firstRow}>
        <InfoCard
          icon={<FaWallet fontSize={10} />}
          title={"TODAY REVENUE"}
          value={"$2189"}
          percentIncrease={12}
        />
        <InfoCard
          icon={<MdPersonAddAlt1 fontSize={12} />}
          title={"TODAY VISITORS"}
          value={"512"}
          percentIncrease={4}
        />
        <InfoCard
          icon={<BiSolidDownload fontSize={12} />}
          title={"TODAY TRANSAC"}
          value={"$325"}
          percentIncrease={-0.89}
        />
        <InfoCard
          icon={<MdShoppingBag fontSize={11} />}
          title={"TODAY PRODUCT"}
          value={"268"}
          percentIncrease={2}
        />
      </div>
      <div className={classes.secondRow}>
        <StatsCard flex={1} title={"Sales Analytics"} buttonText={"Week"} img={"lineGraph.png"}/>
        <StatsCard flex={1} title={"Sales by Category"} buttonText={"Week"} img={"pieChart.png"}/>
      </div>
      <div className={classes.secondRow}>
        <StatsCard flex={3} title={"Top Selling"} buttonText={"Sort By"} img={"table.png"}/>
        <TrendingNowCard/>
      </div>
    </div>
  );
};

export default LandingPageBody;
