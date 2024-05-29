import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddRounded from '@mui/icons-material/AddRounded';
import Grid from '@mui/material/Unstable_Grid2';
import SponsorCard from 'docs/src/components/home/SponsorCard';
import { Link } from '@mui/docs/Link';
import ROUTES from 'docs/src/route';

const GOLDs = [
];

export default function GoldSponsors() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '500px',
  });
  return (
    <div ref={ref}>
      <Typography
        component="h3"
        variant="h6"
        fontWeight="bold"
        sx={(theme) => ({
          mt: 4,
          mb: 1.5,
          background: `linear-gradient(90deg, ${(theme.vars || theme).palette.warning[500]} 50%, ${
            (theme.vars || theme).palette.warning[700]
          } 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          ...theme.applyDarkStyles({
            background: `linear-gradient(90deg, ${
              (theme.vars || theme).palette.warning[400]
            } 50%, ${(theme.vars || theme).palette.warning[700]} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }),
        })}
      >
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {GOLDs.map((item) => (
          <Grid key={item.name} xs={12} sm={6} md={4} lg={3}>
            <SponsorCard inView={inView} item={item} />
          </Grid>
        ))}
        <Grid xs={12} sm={6} md={4} lg={3}>
        </Grid>
      </Grid>
    </div>
  );
}
