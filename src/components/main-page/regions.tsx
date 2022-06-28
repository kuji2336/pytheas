import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { GridItem } from '../global/gridItem';
import { Box, Paper } from '@mui/material';
import { continents } from '../../helpers';
import Image from 'next/image';
export const Regions = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);
  return (
    <Container maxWidth="xl" sx={{ pt: 4 }}>
      <Grid container spacing={5} sx={{ maxWidth: 900, width: '100%' }}>
        {continents.map((continent) => (
          <GridItem xs={4}>
            <Box
              key={continent.id}
              sx={{
                backgroundImage: `url(${continent.image.src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: 300,
              }}
            ></Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};
