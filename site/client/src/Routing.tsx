import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopMenu from './menu/TopMenu';
import './App.css';
import CvPage from './cv/CvPage';
import { PathToCvPage } from './cv/CvLink';
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { darkBackgroundColor } from './components/colors';
import { PathToBeingDeveloperPage } from './career/BeingDeveloperLink';
import { PathToChapterOne } from './career/chapters/ChapterOneLink';
import ChapterOnePage from './career/chapters/ChapterOnePage';
import BeingDeveloperPage from './career/BeingDeveloperPage';
import { PathToChapterTwo } from './career/chapters/ChapterTwoLink';
import ChapterTwoPage from './career/chapters/ChapterTwoPage';
import { PathToChapterThree } from './career/chapters/ChapterThreeLink';
import ChapterThreePage from './career/chapters/ChapterThreePage';
import { PathToChapterFour } from './career/chapters/ChapterFourLink';
import ChapterFourPage from './career/chapters/ChapterFourPage';
import { PathToTechnologiesPage } from './cv/TechnologiesLink';
import TechnologiesPage from './cv/TechonologiesPage';
import { PathToChapterFive } from './career/chapters/ChapterFiveLink';
import ChapterFivePage from './career/chapters/ChapterFivePage';
import { PathToChapterSix } from './career/chapters/ChapterSixLink';
import ChapterSixPage from './career/chapters/ChapterSixPage';
import { PathToChapterSeven } from './career/chapters/ChapterSevenLink';
import ChapterSevenPage from './career/chapters/ChapterSevenPage';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: '100vh',
    backgroundColor: darkBackgroundColor,
  },
}));

export default function Routing() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.container}>
        <TopMenu />
        <div className="App">
          <Routes>
            <Route path={PathToCvPage} element={<CvPage />} />
            <Route path={PathToTechnologiesPage} element={<TechnologiesPage />} />
            <Route path={PathToBeingDeveloperPage} element={<BeingDeveloperPage />} />
            <Route path={PathToChapterOne} element={<ChapterOnePage />} />
            <Route path={PathToChapterTwo} element={<ChapterTwoPage />} />
            <Route path={PathToChapterThree} element={<ChapterThreePage />} />
            <Route path={PathToChapterFour} element={<ChapterFourPage />} />
            <Route path={PathToChapterFive} element={<ChapterFivePage />} />
            <Route path={PathToChapterSix} element={<ChapterSixPage />} />
            <Route path={PathToChapterSeven} element={<ChapterSevenPage />} />
            <Route path="/" element={<CvPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
