import { Theme } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginCallback from './authentication/LoginCallback';
import makeStyles from '@mui/styles/makeStyles';
import Main from './Main';
import TopMenu from './menu/TopMenu';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function Routing() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Router>
        <TopMenu />
        <Routes>
          <Route path="/login/callback/" element={<LoginCallback />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}
