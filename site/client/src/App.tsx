import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import TopMenu from "./menu/TopMenu";

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <TopMenu />
      <div className="App">
        <header className="App-header">
          <p>{t("main.coming_soon")}</p>
          <ul>
            <li>{t("main.coming.pizza")}</li>
            <li>{t("main.coming.hamburger")}</li>
            <li>{t("main.coming.smoking")}</li>
            <li>{t("main.coming.software_development")}</li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default App;
