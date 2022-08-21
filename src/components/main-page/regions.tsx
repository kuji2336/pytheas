import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { GridItem } from '../global/gridItem';
import { Box } from '@mui/material';
import { continents } from '../../helpers';

export const Regions = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);
  return (
    <Container maxWidth="xl" sx={{ pt: 15 }}>
      <Grid container spacing={5} sx={{ maxWidth: 900, width: '100%'}}>
        {continents.map((continent) => (
          <GridItem xs={4} key={continent.id}>
            <Box
              sx={{
                m: 2,
                backgroundImage: `url(${continent.image.src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                height: 200,
                transition: 'transform .5s ease-in-out',
                cursor: 'pointer',
                textTransform: 'uppercase',
                '&:hover': {
                  transform: 'scale(1.2) rotate(25deg)',
                },
              }}
            >
              <Box
                component="p"
                sx={{
                  position: 'absolute',
                  left: '40%',
                  top: '14%',
                  transform: 'translate(-33%, 100%)',
                  fontSize: "14px",
                  color: "#ffffff",
                  borderRadius: "8px",
                  padding: "5px 8px",
                  backgroundColor: "#231f20"
                }}
              >
                {continent.name}
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};
