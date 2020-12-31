import { styled } from "@material-ui/core/styles";
import { Button, Container, Divider, TextField, Typography, withStyles } from "@material-ui/core";
import React from "react";
import { darkThemeTextColor } from "./colors";

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

const defaultTextInputBorderBottom = '1px solid white';
export const StyledTextField = withStyles({
  root: {
    '& label': {
      color: 'white',
    },
    '& input': {
      color: 'white',
    },
    '& label.Mui-error': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottom: defaultTextInputBorderBottom,
    },
    '& .MuiInput-underline:hover': {
      borderBottom: defaultTextInputBorderBottom,
    },
    '& .MuiInput-underline:focus': {
      borderBottom: defaultTextInputBorderBottom,
    },
    '& .MuiInput-underline:after': {
      borderBottom: defaultTextInputBorderBottom,
    },

  },
})(TextField);

export const StyledButton = withStyles({
  outlinedPrimary: {
    color: darkThemeTextColor,
    border: defaultTextInputBorderBottom,
    
  }

})(Button);

export const FlexContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

export const ParagraphContainer = styled("div")({
  paddingTop: "1rem",
  paddingBottom: "1rem",
});

export const UnorderedList = styled("ul")({
  marginBlockStart: "0.1rem",
  marginBlockEnd: "0.1rem",
});

type PageContainerProps = {
  children: React.ReactNode;
};

export function PageContainer(props: PageContainerProps) {
  const PageContainerStyles = styled("div")({
    margin: "1rem",
  });

  return (
    <PageContainerStyles>
      <Container maxWidth="md">
        <>{props.children}</>
      </Container>
    </PageContainerStyles>
  );
}
