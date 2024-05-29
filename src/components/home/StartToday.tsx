import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GradientText from 'docs/src/components/typography/GradientText';
import GetStartedButtons from 'docs/src/components/home/GetStartedButtons';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';

export default function StartToday() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'auto', sm: 'center' },
      }}
    >
      <SectionHeadline
        alwaysCenter
        title={
          <Typography variant="h2">
            The Next-Generation Blockchain <GradientText>Ecosystem</GradientText>
          </Typography>
        }
        description="EpicChain is a pioneering blockchain platform designed to redefine the landscape of digital assets and decentralized applications."
      />
      <GetStartedButtons primaryLabel="Explore EpicChain" primaryUrl="/core/" />
    </Box>
  );
}
