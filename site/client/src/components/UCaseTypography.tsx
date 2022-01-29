import { Typography } from "@mui/material";

import withStyles from '@mui/styles/withStyles';

const defaultMargin = "0.2rem";

export const UCaseTypography = withStyles({
  root: {
    letterSpacing: "0.05rem",
    textTransform: "uppercase",
    textAlign: "left",
    marginBottom: defaultMargin,
  },
})(Typography) as typeof Typography;
