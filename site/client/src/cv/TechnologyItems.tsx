import React from 'react';
import { Grid } from '@mui/material';
import { UCaseTypography } from '../components';

export type ItemsProps = {
  readonly Items: string[];
};

const TechnologyItems = (props: ItemsProps) => {
  const { Items } = props;

  const toGridItem = (item: string, index: number) => {
    return (
      <Grid item key={index}>
        <UCaseTypography variant="h6" component="h5">
          {item}
        </UCaseTypography>
      </Grid>
    );
  };

  return (
    <Grid container spacing={1} justifyContent="center">
      {Items.map(toGridItem)}
    </Grid>
  );
};

export default TechnologyItems;
