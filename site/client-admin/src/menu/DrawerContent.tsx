import React from 'react';
import { Grid, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import LogoutLink from "../authentication/LogoutLink";

type DrawerContentProps = {
  readonly closeDrawer: Function;
};

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    width: 250,
    alignItems: 'baseline',
    color: 'white',
    paddingTop: '2rem',
    paddingLeft: '2rem',
    height: '100%',
  },
}));

export default function DrawerContent(props: DrawerContentProps) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Grid container>
        <Grid item />
        <Grid item position="absolute" bottom={0} paddingBottom={2}>
          <LogoutLink />
        </Grid>
      </Grid>
    </div>
  );
}
