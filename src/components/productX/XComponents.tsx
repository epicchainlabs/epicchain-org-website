import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import XComponentsSwitcher from 'docs/src/components/productX/XComponentsSwitcher';
import XGridFullDemo from 'docs/src/components/productX/XGridFullDemo';
import XDateRangeDemo from 'docs/src/components/productX/XDateRangeDemo';
import XTreeViewDemo from 'docs/src/components/productX/XTreeViewDemo';
import XChartsDemo from 'docs/src/components/productX/XChartsDemo';

export default function XComponents() {
  const [componentIndex, setComponentIndex] = React.useState(0);
  return (
    <Section bg="gradient">
      <Grid container spacing={2}>
        <Grid md={6}>
          <SectionHeadline
            title={
              <Typography variant="h2">
                Cornerstone of EpicChain's <GradientText>Security Architecture</GradientText>
              </Typography>
            }
            description="Quantum Guard Nexus is the cornerstone of EpicChain's security architecture, designed to provide top-tier protection for digital assets and transactions. By leveraging advanced cryptographic techniques."
          />
          <XComponentsSwitcher
            componentIndex={componentIndex}
            setComponentIndex={setComponentIndex}
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={componentIndex === 0 ? { minHeight: { xs: 'auto', sm: 757, md: 'unset' } } : {}}
        >
          <React.Fragment>
            {componentIndex === 0 && <XGridFullDemo />}
            {componentIndex === 1 && <XDateRangeDemo />}
            {componentIndex === 2 && <XChartsDemo />}
            {componentIndex === 3 && <XTreeViewDemo />}
          </React.Fragment>
        </Grid>
      </Grid>
    </Section>
  );
}
