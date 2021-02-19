import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComingSoonPage from "./coming-soon/ComingSoonPage";
import TopMenu from "./menu/TopMenu";
import "./App.css";
import CvPage from "./cv/CvPage";
import { PathToCvPage } from "./cv/CvLink";
import { PathToComingSoonPage } from "./coming-soon/ComingSoonLink";
import { makeStyles, Theme } from "@material-ui/core";
import { darkBackgroundColor } from "./styles/colors";
import { PathToBeingDeveloperPage } from "./career/BeingDeveloperLink";
import { PathToChapterOne } from "./career/chapters/ChapterOneLink";
import ChapterOnePage from "./career/chapters/ChapterOnePage";
import BeingDeveloperPage from "./career/BeingDeveloperPage";
import { PathToChapterTwo } from "./career/chapters/ChapterTwoLink";
import ChapterTwoPage from "./career/chapters/ChapterTwoPage";
import { PathToChapterThree } from "./career/chapters/ChapterThreeLink";
import ChapterThreePage from "./career/chapters/ChapterThreePage";
import { PathToTechnologiesPage } from "./cv/TechnologiesLink";
import TechnologiesPage from "./cv/TechonologiesPage";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: darkBackgroundColor,
  },
}));

export default function Routing() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.container}>
        <TopMenu />
        <div className="App">
          <Switch>
            <Route path={PathToCvPage} exact>
              <CvPage />
            </Route>
            <Route path={PathToTechnologiesPage}>
              <TechnologiesPage />
            </Route>
            <Route path={PathToComingSoonPage}>
              <ComingSoonPage />
            </Route>
            <Route path={PathToBeingDeveloperPage}>
              <BeingDeveloperPage />
            </Route>
            <Route path={PathToChapterOne}>
              <ChapterOnePage />
            </Route>
            <Route path={PathToChapterTwo}>
              <ChapterTwoPage />
            </Route>
            <Route path={PathToChapterThree}>
              <ChapterThreePage />
            </Route>
            <Route path="/">
              <CvPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
