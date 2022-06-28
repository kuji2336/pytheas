import Image from 'next/image';
import React from 'react';
import { Box } from '@mui/material';
import Main from '../../../public/main.jpeg';

const BackgroundContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        mt: 11,
        backgroundImage: `url(${Main.src})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundContent;
