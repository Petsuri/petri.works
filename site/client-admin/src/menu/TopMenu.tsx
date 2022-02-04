import { AppBar, IconButton, Theme, Toolbar, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import LogoutLink from '../authentication/LogoutLink';

const useStyles = makeStyles((theme: Theme) => ({
  menuIcon: {
    paddingRight: 25,
  },
  paper: {
    background: theme.palette.primary.dark,
  },
  icon: {
    color: 'inherit',
  },
}));

const TopMenu = (): JSX.Element => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label={'open menu'}
            className={classes.icon}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Petri.works admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        classes={{ paper: classes.paper }}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div>
          <LogoutLink />
          </div>
      </Drawer>
    </>
  );
};

export default TopMenu;
