import { AppBar, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "./icons/LanguageIcon";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
}));

const TopMenu = (): JSX.Element => {
    const { t } = useTranslation();
    const classes = useStyles();
    
    return <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
            {t('main.works')}
        </Typography>
        <div>
        <LanguageIcon />
        </div>
        </Toolbar>
    </AppBar>;
}

export default TopMenu;