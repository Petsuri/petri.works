import { Container, Divider, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import OuterLink from "../OuterLink";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "1rem",
  },
  upperCaseText: {
    letterSpacing: theme.spacing(0.5),
    textTransform: "uppercase",
    textAlign: "left",
  },
  divider: {
    background: "white",
  },
  container: {
    padding: "1rem",
  },
  emptyLine: {
    height: "0.5rem",
  },
}));

export default function CvPage() {
  const classes = useStyles();

  //return <div>{t("cv.coming_soon")}</div>;
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Container className={classes.container}>
          <Typography variant="h3" className={classes.upperCaseText}>
            Petri Miikki
          </Typography>
          <Typography variant="h4" className={classes.upperCaseText}>
            Tech Lead
          </Typography>
          <Typography variant="h5" className={classes.upperCaseText}>
            <OuterLink
              openToBlank={true}
              href="https://github.com/petsuri"
              text="Github"
            />
          </Typography>
          <Typography variant="h5" className={classes.upperCaseText}>
            <OuterLink
              href="mailto:miikinpetri@gmail.com"
              text="miikinpetri@gmail.com"
            />
          </Typography>
        </Container>
        <Divider classes={{ root: classes.divider }} />
        <Container className={classes.container}>
          <Typography variant="h3" className={classes.upperCaseText}>
            Profile
          </Typography>
          <Typography variant="body1">
            Tech Lead with 6+ years of experience working with web and mobile
            applications. Possesses a strong motivation for continuous
            improvement and challenging myself to develop professionally.
            Coaching cowerkers to achieve their and company's goals.
          </Typography>
          <div className={classes.emptyLine} />
          <Typography variant="body1">
            In technical decision making always taking in to notice return on
            investment because there is no technical decisions, only business
            decisions.
          </Typography>
        </Container>
        <Divider classes={{ root: classes.divider }} />
        <Container className={classes.container}>
          <Typography variant="h3" className={classes.upperCaseText}>
            Skills
          </Typography>
          <Typography variant="body1">...</Typography>
        </Container>
      </Container>
    </div>
  );
}
