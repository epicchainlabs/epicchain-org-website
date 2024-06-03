import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import { Link } from '@mui/docs/Link';
import IconImage from 'docs/src/components/icon/IconImage';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import ROUTES from 'docs/src/route';

const companyInfo = [
  {
    title: 'About us',
    description: 'EpicChain Labs is a trailblazer in the blockchain industry, spearheading innovation and pushing the boundaries of technology.',
    routeUrl: ROUTES.about,
  },
  {
    title: 'Blog',
    description: 'Welcome to the EpicChain Labs blog, your go-to source for all things blockchain. Here, we explore the latest trends, developments, and innovations in the world of blockchain technology.',
    routeUrl: ROUTES.blog,
  },
];

function RemoteAwardCard() {
  return (
    <Paper
      component={Link}
      href="/blog/remote-award-win-2024/"
      noLinkStyle
      variant="outlined"
      sx={{ p: 2 }}
    >
      <Box
        sx={{
          mb: 2,
          maxWidth: { xs: 315, sm: 325 },
          maxHeight: 315,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '6px',
          overflow: 'clip',
        }}
      >
      </Box>
      <div>
        <Typography component="h2" variant="body2" fontWeight="semiBold">
        Explore Exciting Career Opportunities at EpicChain Labs
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Are you ready to revolutionize the future of blockchain technology? EpicChain Labs is looking for talented individuals like you to join our dynamic team of innovators and visionaries. 🎉
        </Typography>
        <Typography variant="body2" fontWeight="bold" color="primary">
          Learn more <KeyboardArrowRightRounded fontSize="small" sx={{ verticalAlign: 'middle' }} />
        </Typography>
      </div>
    </Paper>
  );
}

export default function PerksBenefits() {
  return (
    <Section bg="gradient" cozy>
      <Grid container spacing={5} alignItems="center">
        <Grid md={6}>
          <SectionHeadline
            title={
              <Typography variant="h2" id="perks-and-benefits">
                Benefits of a Career
              </Typography>
            }
            description="Joining EpicChain Labs isn't just about a job; it's about being part of a pioneering team shaping the future of blockchain technology."
          />
          <Box sx={{ maxWidth: 500 }}>
            {[
              ['Innovative Projects', 'Work on cutting-edge projects like Quantum Guard Nexus and Smart Contracts, pushing the boundaries of what possible in blockchain.              '],
              [
                'Career Growth',
                'We invest in our employees growth, offering training and development programs to help you reach your full potential.',
              ],
              [
                'Competitive Compensation',
                'Enjoy competitive salaries and benefits, including health insurance and retirement plans, ensuring your hard work is rewarded.',
              ],
              ['Work-Life Balance', 'Benefit from flexible work hours and remote work options, supporting your well-being both in and out of the office.'],
            ].map((textArray) => (
              <Box
                key={textArray[0]}
                sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1, py: 0.5 }}
              >
                <IconImage name="pricing/yes" />
                <div>
                  <Typography variant="body2" color="text.primary" fontWeight="semiBold">
                    {textArray[0]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {textArray[1]}
                  </Typography>
                </div>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{
            p: { xs: 2, sm: 0 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
          }}
        >
          <RemoteAwardCard />
          <Stack spacing={2} useFlexGap>
            {companyInfo.map(({ title, description, routeUrl }) => (
              <Paper
                key={title}
                component={Link}
                href={routeUrl}
                noLinkStyle
                variant="outlined"
                sx={{
                  p: 2,
                  width: '100%',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {description}
                </Typography>
                <Typography variant="body2" fontWeight="bold" color="primary" sx={{ mt: 'auto' }}>
                  Learn more{' '}
                  <KeyboardArrowRightRounded fontSize="small" sx={{ verticalAlign: 'middle' }} />
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
