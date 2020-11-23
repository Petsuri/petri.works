import {
  AppBar,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelection } from "./LanguageSelection";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import DrawerContent from "./DrawerContent";
import { darkBackgroundColor } from "../styles/Colors";

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
  menuIcon: {
    paddingRight: 25,
  },
  paper: {
    background: darkBackgroundColor,
  },
  icon: {
    color: "inherit",
  },
}));

const TopMenu = (): JSX.Element => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.icon}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.titleDesktop}>
            {t("main.works")}
          </Typography>
          <Typography variant="h6" className={classes.titleMobile}>
            {t("main.works_short")}
          </Typography>
          <LanguageSelection />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        classes={{ paper: classes.paper }}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <DrawerContent closeDrawer={() => setIsDrawerOpen(false)} />
      </Drawer>
    </>
  );
};

export default TopMenu;
