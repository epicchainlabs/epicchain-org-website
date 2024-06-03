import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import CompareIcon from '@mui/icons-material/Compare';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import { GlowingIconContainer } from '@mui/docs/InfoCard';
import GetStartedButtons from 'docs/src/components/home/GetStartedButtons';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import { Link } from '@mui/docs/Link';
import ROUTES from 'docs/src/route';

interface MaterialEndProps {
  noFaq?: boolean;
}

export default function MaterialEnd({ noFaq }: MaterialEndProps) {
  return (
    <Section
      cozy
      data-mui-color-scheme="dark"
      sx={{
        color: 'text.secondary',
        background: (theme) =>
          `linear-gradient(180deg, ${(theme.vars || theme).palette.primaryDark[900]} 50%, 
          ${alpha(theme.palette.primary[800], 0.2)} 100%), ${
            (theme.vars || theme).palette.primaryDark[900]
          }`,
      }}
    >
      {noFaq ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SectionHeadline
            alwaysCenter
            overline="Community"
            title={
              <Typography variant="h2">
                Stay Connected <GradientText>with EpicChain</GradientText>
              </Typography>
            }
            description={
              <React.Fragment>
                Join our vibrant community of blockchain enthusiasts, developers, and investors to stay updated on the latest developments, events, and opportunities within the EpicChain ecosystem. Whether you're a seasoned blockchain expert or just starting your journey, there's a place for you in the EpicChain community.
              </React.Fragment>
            }
          />
          <GetStartedButtons
            primaryUrl={ROUTES.materialDocs}
            secondaryLabel="View templates"
            secondaryUrl={ROUTES.freeTemplates}
          />
        </Box>
      ) : (
        <Grid container spacing={{ xs: 6, sm: 10 }} alignItems="center">
          <Grid xs={12} sm={6}>
            <SectionHeadline
              title={
                <Typography variant="h2">
                  Stay Connected <GradientText>with EpicChain</GradientText>
                </Typography>
              }
              description={
                <React.Fragment>
                  Join our vibrant community of blockchain enthusiasts, developers, and investors to stay updated on the latest developments, events, and opportunities within the EpicChain ecosystem. Whether you're a seasoned blockchain expert or just starting your journey, there's a place for you in the EpicChain community.
                </React.Fragment>
              }
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <List sx={{ '& > li': { alignItems: 'flex-start' } }}>
              <ListItem sx={{ p: 0, mb: 4, gap: 2.5 }}>
                <GlowingIconContainer icon={<CompareIcon color="primary" />} />
                <div>
                  <Typography color="text.primary" fontWeight="semiBold" gutterBottom>
                  Quantum Connect
                  </Typography>
                  <Typography>
                  Quantum Connect is EpicChain's innovative solution for ensuring users stay connected to the blockchain network.
                  </Typography>
                </div>
              </ListItem>
              <ListItem sx={{ p: 0, gap: 2.5 }}>
                <GlowingIconContainer icon={<StyleRoundedIcon color="primary" />} />
                <div>
                  <Typography color="text.primary" fontWeight="semiBold" gutterBottom>
                  Quantum Reach
                  </Typography>
                  <Typography>
                  Quantum Reach is EpicChain's solution for extending network connectivity to a broader range of devices and users.
                  </Typography>
                </div>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      )}
    </Section>
  );
}
