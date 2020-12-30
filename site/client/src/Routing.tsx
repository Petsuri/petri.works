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
import BeingDeveloperPage from "./career/BeingDeveloperPage";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: "100vh",
    minWidth: "400px",
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
            <Route path={PathToCvPage}>
              <CvPage />
            </Route>
            <Route path={PathToComingSoonPage}>
              <ComingSoonPage />
            </Route>
            <Route path={PathToBeingDeveloperPage}>
              <BeingDeveloperPage />
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
