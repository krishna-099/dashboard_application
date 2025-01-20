import { landingPageStyles } from "./landingPage.styles";
import { useState } from "react";
import CollapsibleSideMenu from "src/components/collapsibleSideMenu";
import LandingPageBody from "src/components/landingPageBody";
import LandingPageHeader from "src/components/landingPageHeader";

const LandingPage = () => {
  // window.localStorage.setItem("isLoggedIn", "true");
  const [expand, setExpand] = useState(false);
  const { classes } = landingPageStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <CollapsibleSideMenu expand={expand} />
        <div className={classes.content}>
          <LandingPageHeader setExpand={setExpand} expand={expand} />
          <LandingPageBody />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
