import { Grid } from '@mui/material';
import React from 'react';

export const GridItem = ({
  xs,
  children,
}: {
  xs: number;
  children: React.ReactNode;
}) => {
  return (
    <Grid item xs={xs}>
      {children}
    </Grid>
  );
};
