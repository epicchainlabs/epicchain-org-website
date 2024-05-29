import * as React from 'react';
import Typography from '@mui/material/Typography';
import Section from 'docs/src/layouts/Section';
import DiamondSponsors from 'docs/src/components/home/DiamondSponsors';
import GoldSponsors from 'docs/src/components/home/GoldSponsors';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';

export default function Sponsors() {
  return (
    <Section cozy>
      <SectionHeadline
        title={
          <Typography variant="h2" sx={{ my: 1 }}>
            <GradientText>EpicChain</GradientText> is proud to be supported
          </Typography>
        }
        description="diverse group of innovative and leading companies from around the globe."
      />
      <DiamondSponsors />
      <GoldSponsors />
    </Section>
  );
}
