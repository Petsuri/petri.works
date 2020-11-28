import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import TopMenu from "./menu/TopMenu";
import "./App.css";
import CvPage from "./cv/CvPage";
import { PathToCvPage } from "./cv/CvLink";
import { PathToMainPage } from "./MainLink";
import { makeStyles, Theme } from "@material-ui/core";
import { darkBackgroundColor } from "./styles/Colors";

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
            <Route path={PathToMainPage}>
              <MainPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
