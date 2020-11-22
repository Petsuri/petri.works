import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import TopMenu from "./menu/TopMenu";
import "./App.css";
import CvPage from "./cv/CvPage";
import { PathToCvPage } from "./cv/CvLink";
import { PathToMainPage } from "./MainLink";

export default function Routing() {
  return (
    <Router>
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
    </Router>
  );
}
