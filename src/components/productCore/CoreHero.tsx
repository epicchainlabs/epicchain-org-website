import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';

import IconImage from 'docs/src/components/icon/IconImage';

export default function CoreHero() {
  return (
    <Section cozy noPaddingBottom>
      <SectionHeadline
        alwaysCenter
        overline={
          <Stack direction="row" justifyContent="center" alignItems="center">
          </Stack>
        }
        title={
          <Typography component="h1" variant="h2" sx={{ textAlign: 'center' }} gutterBottom>
            Enhancing Blockchain <GradientText>Security</GradientText>
          </Typography>
        }
        description="Quantum Guard Nexus employs cutting-edge encryption algorithms that are resistant to quantum attacks, ensuring the security and confidentiality of digital assets and transactions."
      />
    </Section>
  );
}
