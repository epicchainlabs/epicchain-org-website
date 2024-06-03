import * as React from 'react';
import Typography from '@mui/material/Typography';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';

export default function HeroPricing() {
  return (
    <Section cozy>
      <SectionHeadline
        alwaysCenter
        overline="Pricing"
        title={
          <Typography variant="h2" component="h1">
            Pioneering Blockchain <GradientText>Innovation</GradientText>
          </Typography>
        }
        description="EpicChain Labs is the research and development arm of EpicChain, dedicated to pioneering blockchain innovation and advancing the capabilities of decentralized technologies."
      />
    </Section>
  );
}
