import React from "react";
import { List, ListItem, makeStyles, Theme } from "@material-ui/core";
import CvLink from "../cv/CvLink";
import ComingSoonLink from "../coming-soon/ComingSoonLink";
import BeingDeveloperLink from "../career/BeingDeveloperLink";

type DrawerContentProps = {
  readonly closeDrawer: Function;
};

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    width: 250,
    textAlign: "center",
    alignItems: "baseline",
    color: "white",
    paddingTop: "2rem",
    paddingLeft: "2rem",
  },
}));

export default function DrawerContent(props: DrawerContentProps) {
  const classes = useStyles();

  const links = [<CvLink />, <BeingDeveloperLink />, <ComingSoonLink />];

  const renderLink = (link: JSX.Element, index: number) => {
    return (
      <ListItem key={index} onClick={() => props.closeDrawer()}>
        {link}
      </ListItem>
    );
  };

  return (
    <div className={classes.content}>
      <List>{links.map(renderLink)}</List>
    </div>
  );
}
