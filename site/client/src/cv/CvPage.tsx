import { Container, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import OuterLink from "../OuterLink";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "1rem",
  },
  upperCaseText: {
    letterSpacing: "0.05em",
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
            <Grid container spacing={5}>
              <Grid item>
                <OuterLink
                  openToBlank={true}
                  href="https://github.com/petsuri"
                  text="Github"
                />
              </Grid>
              <Grid item>
                <OuterLink
                  openToBlank={true}
                  href="https://linkedin.com/in/petri-miikki-073775163"
                  text="LinkedIn"
                />
              </Grid>
            </Grid>
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
          <Grid container spacing={3}>
            <Grid item sm={5}>
              <div>
                <Typography variant="h5" className={classes.upperCaseText}>
                  Software architecture
                </Typography>
                <Typography variant="body1">
                  From monoliths to event-driven architectures. Making decisions
                  which the best suite business needs.
                </Typography>
              </div>
            </Grid>
            <Grid item sm={5}>
              <div>
                <Typography variant="h5" className={classes.upperCaseText}>
                  Solid principles
                </Typography>
                <Typography variant="body1">
                  Advocate for good design practices and making code flexible.
                  Hold workshops about <OuterLink href="" text="SOLID" />.
                </Typography>
              </div>
            </Grid>
            <Grid item sm={5}>
              <div>
                <Typography variant="h5" className={classes.upperCaseText}>
                  Domain driven design
                </Typography>
                <Typography variant="body1">
                  When products are complex with bigger teams of maintaining
                  them, my skills of DDD with microservice patterns will bring
                  simplicity to design.
                </Typography>
              </div>
            </Grid>
            <Grid item sm={5}>
              <div>
                <Typography variant="h5" className={classes.upperCaseText}>
                  Software design patterns
                </Typography>
                <Typography variant="body1">
                  Strong skills in software design patterns allowing me to make
                  decisions best serving business and customer needs. Doesn't
                  under- or overengineer.
                </Typography>
              </div>
            </Grid>
            <Grid item sm={5}>
              <div>
                <Typography variant="h5" className={classes.upperCaseText}>
                  Unit testing
                </Typography>
                <Typography variant="body1">
                  Skills to take the lead of defining good practices, patterns
                  and priciples of unit testing. Passionate about writing high
                  quality tests.
                </Typography>
              </div>
            </Grid>
            <Grid item sm={5}>
              <div>
                <Typography variant="h5" className={classes.upperCaseText}>
                  Coaching and mentoring
                </Typography>
                <Typography variant="body1">
                  Always willing to share knowledge, mentor and coach others to
                  succeed. Successfully created practices for knowledge sharing
                  in earlier positions.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
