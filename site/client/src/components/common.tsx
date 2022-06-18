import { styled } from '@mui/material/styles';
import { Button, Container, Divider, ListItem, TextField, Typography } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import React from 'react';
import { darkThemeTextColor } from './colors';

export const WhiteDivider = styled(Divider)({
  background: 'white',
});

export const Paragraph = styled(Typography)({
  '& + &': {
    paddingTop: '0.4rem',
  },
});

export const TextContainer = styled(Container)({
  padding: '1rem',
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
  },
})(Button);

export const FlexContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

export const ParagraphContainer = styled('div')({
  paddingTop: '1rem',
  paddingBottom: '1rem',
});

export const UnorderedList = styled('ul')(({ theme }) => ({
  marginBlockStart: '0.1rem',
  marginBlockEnd: '0.1rem',
  color: theme.palette.primary.contrastText,
}));

export const IdentedListItem = styled(ListItem)({
  paddingLeft: '2rem',
});

const PageContainerStyles = styled('div')(({ theme }) => ({
  padding: '1rem',
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.dark,
}));

type PageContainerProps = {
  readonly children: React.ReactNode;
};
export function PageContainer(props: PageContainerProps) {
  return (
    <PageContainerStyles>
      <Container maxWidth="md">
        <>{props.children}</>
      </Container>
    </PageContainerStyles>
  );
}
