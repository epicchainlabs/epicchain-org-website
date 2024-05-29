import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import MuiStatistics from 'docs/src/components/home/MuiStatistics';

const TESTIMONIALS = [
];

function Feedback({
  quote,
  profile,
}: {
  quote: string;
  profile: {
    avatarSrc: string;
    avatarSrcSet: string;
    name: string;
    role: string;
    company?: React.ReactElement;
  };
}) {
  return (
    <Box
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#FFF',
      }}
    >
      <Typography
        sx={{
          mb: 2.5,
          lineHeight: 1.6,
          color: 'grey.200',
          fontSize: (theme) => theme.typography.pxToRem(15),
        }}
      >
        {quote}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          sx={(theme) => ({
            p: 0.5,
            border: '1px solid',
            borderColor: 'primary.800',
            bgcolor: alpha(theme.palette.primary[900], 0.5),
            borderRadius: 99,
          })}
        >
          <Avatar
            srcSet={profile.avatarSrcSet}
            src={profile.avatarSrc}
            alt={`${profile.name}'s profile picture`}
            slotProps={{ img: { loading: 'lazy' } }}
            sx={{
              width: 36,
              height: 36,
            }}
          />
        </Box>
        <div>
          <Typography variant="body2" fontWeight="semiBold" color="text.primary">
            {profile.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.role}
          </Typography>
        </div>
        <Box sx={{ ml: 'auto' }}>{profile.company}</Box>
      </Box>
    </Box>
  );
}

export default function UserFeedbacks() {
  return (
    <Grid
      container
      sx={(theme) => ({
        mt: 4,
        backgroundColor: 'rgba(255,255,255,0.01)',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        overflow: 'clip',
        '> :nth-of-type(1)': { borderBottom: `1px solid ${theme.palette.primaryDark[700]}` },
        '> :nth-of-type(2)': {
          borderBottom: `1px solid ${theme.palette.primaryDark[700]}`,
          borderRight: { xs: 0, sm: `1px solid ${theme.palette.primaryDark[700]}` },
        },
        '> :nth-of-type(3)': { borderBottom: `1px solid ${theme.palette.primaryDark[700]}` },
        '> :nth-of-type(4)': {
          borderRight: { xs: 0, sm: `1px solid ${theme.palette.primaryDark[700]}` },
          borderBottom: { xs: `1px solid ${theme.palette.primaryDark[700]}`, sm: 0 },
        },
      })}
    >
      <MuiStatistics />
      {TESTIMONIALS.map((item) => (
        <Grid key={item.profile.name} xs={12} sm={6}>
          <Feedback {...item} />
        </Grid>
      ))}
    </Grid>
  );
}
