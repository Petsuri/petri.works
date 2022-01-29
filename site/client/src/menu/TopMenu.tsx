import { AppBar, IconButton, Theme, Toolbar, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelection } from './LanguageSelection';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';
import { darkBackgroundColor } from '../components/colors';

const useStyles = makeStyles((theme: Theme) => ({
  titleDesktop: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titleMobile: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  menuIcon: {
    paddingRight: 25,
  },
  paper: {
    background: darkBackgroundColor,
  },
  icon: {
    color: 'inherit',
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
            aria-label={t('main.open_menu')}
            className={classes.icon}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.titleDesktop}>
            {t('main.works')}
          </Typography>
          <Typography variant="h6" className={classes.titleMobile}>
            {t('main.works_short')}
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
