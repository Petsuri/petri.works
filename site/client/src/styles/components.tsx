import { styled } from "@material-ui/core/styles";
import { Container, Divider, Typography } from "@material-ui/core";

const defaultMargin = "0.2rem";

export const UCaseTypography = styled(Typography)({
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  textAlign: "left",
  marginBottom: defaultMargin,
});

export const WhiteDivider = styled(Divider)({
  background: "white",
});

export const Paragraph = styled(Typography)({
  "& + &": {
    paddingTop: defaultMargin,
  },
});

export const TextContainer = styled(Container)({
  padding: "1rem",
});

export const FlexContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const UnorderedList = styled("ul")({
  marginBlockStart: "0.1rem",
  marginBlockEnd: "0.1rem",
});
