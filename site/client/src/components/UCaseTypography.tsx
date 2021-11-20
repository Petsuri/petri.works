import {
  Typography,
  withStyles,
} from "@material-ui/core";

const defaultMargin = "0.2rem";

export const UCaseTypography = withStyles({
  root: {
    letterSpacing: "0.05rem",
    textTransform: "uppercase",
    textAlign: "left",
    marginBottom: defaultMargin,
  },
})(Typography) as typeof Typography;