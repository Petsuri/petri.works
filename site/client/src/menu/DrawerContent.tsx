import React from "react";
import { List, ListItem, makeStyles, Theme } from "@material-ui/core";
import CvLink from "../cv/CvLink";
import ComingSoonLink from "../coming-soon/ComingSoonLink";

type DrawerContentProps = {
  closeDrawer: Function;
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
  return (
    <div className={classes.content}>
      <List>
        <ListItem onClick={() => props.closeDrawer()}>
          <CvLink />
        </ListItem>
        <ListItem onClick={() => props.closeDrawer()}>
          <ComingSoonLink />
        </ListItem>
      </List>
    </div>
  );
}
