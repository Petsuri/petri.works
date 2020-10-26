import {
  AppBar,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelection } from "./LanguageSelection";

const useStyles = makeStyles((theme: Theme) => ({
  titleDesktop: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  titleMobile: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

const TopMenu = (): JSX.Element => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.titleDesktop}>
          {t("main.works")}
        </Typography>
        <Typography variant="h6" className={classes.titleMobile}>
          {t("main.works_short")}
        </Typography>
        <LanguageSelection />
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
