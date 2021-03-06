import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@mui/system';
import BackgroundContent from '../src/components/main-page/background-content';
import { Regions } from '../src/components/main-page/regions';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <BackgroundContent>
          <Regions />
        </BackgroundContent>
      </Box>
    </div>
  );
};

export default Home;
