import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import { Link } from '@mui/docs/Link';
import GradientText from 'docs/src/components/typography/GradientText';
import ROUTES from 'docs/src/route';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';

const values = [
  {
    title: 'Integrity',
    description: "We prioritize honesty, transparency, and ethical behavior in all our actions.",
    lightIcon: 'url(/static/branding/about/illustrations/community-light.svg)',
    darkIcon: 'url(/static/branding/about/illustrations/community-dark.svg)',
    width: 92,
    height: 84,
  },
  {
    title: 'Innovation',
    description: "we are driven by a relentless pursuit of innovation.",
    lightIcon: 'url(/static/branding/about/illustrations/bureaucracy-light.svg)',
    darkIcon: 'url(/static/branding/about/illustrations/bureaucracy-dark.svg)',
    width: 81,
    height: 94,
  },
  {
    title: 'Collaboration',
    description: "We believe in the power of teamwork and collaboration.",
    lightIcon: 'url(/static/branding/about/illustrations/better-light.svg)',
    darkIcon: 'url(/static/branding/about/illustrations/better-dark.svg)',
    width: 89,
    height: 89,
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do.',
    lightIcon: 'url(/static/branding/about/illustrations/trust-light.svg)',
    darkIcon: 'url(/static/branding/about/illustrations/trust-dark.svg)',
    width: 75,
    height: 92,
  },
];

export default function OurValues() {
  return (
    <Section cozy>
      <SectionHeadline
        title={
          <Typography variant="h2">
            We strive to push <GradientText>the boundaries</GradientText>
          </Typography>
        }
        description="The EpicChain team is committed to pioneering advancements in blockchain technology with a mission rooted in innovation, security, and community empowerment."
      />
      <Grid container spacing={3} sx={{ mt: { xs: 1, sm: 2 } }}>
        {values.map(({ title, description, darkIcon, lightIcon, height, width }) => (
          <Grid key={title} xs={12} md={3}>
            <Paper
              variant="outlined"
              sx={(theme) => ({
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'space-between',
                gap: 1.5,
                background: `${(theme.vars || theme).palette.gradients.linearSubtle}`,
                ...theme.applyDarkStyles({
                  bgcolor: 'primaryDark.900',
                  background: `${(theme.vars || theme).palette.gradients.linearSubtle}`,
                  borderColor: 'primaryDark.700',
                }),
              })}
            >
              <Box sx={{ height: 94 }}>
                <Box
                  width={width}
                  height={height}
                  sx={(theme) => ({
                    background: `${lightIcon}`,
                    ...theme.applyDarkStyles({
                      background: `${darkIcon}`,
                    }),
                  })}
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  fontWeight="bold"
                  component="h3"
                  variant="body2"
                  sx={(theme) => ({
                    mb: 0.5,
                    color: (theme.vars || theme).palette.text.primary,
                    '&::first-letter': {
                      mr: 0.1,
                      fontSize: theme.typography.pxToRem(16),
                      color: (theme.vars || theme).palette.primary.main,
                    },
                    ...theme.applyDarkStyles({
                      '&::first-letter': {
                        color: (theme.vars || theme).palette.primary[400],
                      },
                    }),
                  })}
                >
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
