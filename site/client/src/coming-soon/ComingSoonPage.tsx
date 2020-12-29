import { makeStyles, Theme } from "@material-ui/core";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Hello } from "@petriworks/api-client";
import { client } from "../ApiClient";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    textAlign: "center",
  },
}));

export default function ComingSoonPage() {
  const { t } = useTranslation();
  const classes = useStyles();

  useEffect(() => {
    client()
      .send(new Hello())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <div className={classes.content}>
      <div>
        <header>
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
