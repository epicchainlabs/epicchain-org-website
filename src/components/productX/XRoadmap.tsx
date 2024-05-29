import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import PivotTableChartRoundedIcon from '@mui/icons-material/PivotTableChartRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AccountTreeRounded from '@mui/icons-material/AccountTreeRounded';
import BarChartRounded from '@mui/icons-material/BarChartRounded';
import FileUploadRounded from '@mui/icons-material/FileUploadRounded';
import PendingActionsRounded from '@mui/icons-material/PendingActions';
import FormatSizeRoundedIcon from '@mui/icons-material/FormatSizeRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import SpeedRounded from '@mui/icons-material/SpeedRounded';
import { alpha } from '@mui/material/styles';
import ROUTES from 'docs/src/route';
import { Link } from '@mui/docs/Link';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import Section from 'docs/src/layouts/Section';
import GradientText from 'docs/src/components/typography/GradientText';

interface RoadmapStatusDotProps {
  color: string;
}

function RoadmapStatusDot({ color }: RoadmapStatusDotProps) {
  return (
    <Box
      sx={{
        ml: 1,
        display: 'inline-block',
        width: 8,
        height: 8,
        borderRadius: 10,
        bgcolor: `${color}`,
      }}
    />
  );
}

export default function XRoadmap() {
  function renderList(content: React.ReactElement, nested?: boolean) {
    return (
      <Box
        sx={{
          mt: 2,
          display: 'grid',
          alignItems: 'center',
          gap: 1.5,
          gridTemplateColumns: 'max-content 1fr',
          position: 'relative',
          fontWeight: 'semiBold',
          ...(nested && {
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              width: 1.5,
              bgcolor: 'primaryDark.600',
              top: 24,
              bottom: 10,
              left: 8,
            },
          }),
        }}
      >
        {content}
      </Box>
    );
  }
  const bullet = (
    <Box
      sx={{
        ml: 1,
        mr: -2,
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          display: 'block',
          height: 1.5,
          width: 15,
          bgcolor: 'primaryDark.600',
        },
      }}
    />
  );
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
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid xs={12} md={5}>
          <SectionHeadline
            title={
              <Typography variant="h2">
                Shaping the <GradientText>Future of Blockchain</GradientText> Technology
              </Typography>
            }
            description="The EpicChain roadmap outlines our strategic vision and development milestones as we strive to revolutionize the blockchain landscape. Here's a detailed look at our roadmap"
          />
        </Grid>
        <Grid
          xs={12}
          md={7}
          lg="auto"
          container
          spacing={2}
          sx={{
            typography: 'body2',
            '& .MuiPaper-root': {
              p: 2,
              minWidth: { lg: 180 },
            },
            '& svg': {
              color: 'primary.300',
            },
          }}
        >
          <Grid xs={12} sm={4} lg="auto">
            <Paper variant="outlined">
              <Typography component="div" fontWeight="bold" variant="body2" color="text.primary">
              Development and Foundation Building (2024)
                <RoadmapStatusDot color="success.main" />
              </Typography>
              {renderList(
                <React.Fragment>
                  <PivotTableChartRoundedIcon sx={{ fontSize: 16 }} />
                  April 4, 2024: EpicChain Mainnet Launch
                  <CalendarMonthRoundedIcon sx={{ fontSize: 16 }} />
                  Q3 2024: Complete development of EpicChain
                  <BarChartRounded sx={{ fontSize: 16 }} />
                  Q4 2024: Launch EpicChain Mobile Wallet 
                </React.Fragment>,
              )}
            </Paper>
          </Grid>

          <Grid xs={12} sm={4} lg="auto">
            <Paper variant="outlined">
              <Typography component="div" fontWeight="bold" variant="body2" color="text.primary">
              Ecosystem Expansion and Community Growth (2025)
                <RoadmapStatusDot color="success.main" />
              </Typography>
              {renderList(
                <React.Fragment>
                  <PivotTableChartRoundedIcon sx={{ fontSize: 16 }} />
                  Q1 2025: Partner with additional exchanges for EpicChain (XPR) and EpicPulse (XPP) listings
                  <CalendarMonthRoundedIcon sx={{ fontSize: 16 }} />
                  Q2 2025: Introduce decentralized applications (dApps) on the EpicChain ecosystem
                  <BarChartRounded sx={{ fontSize: 16 }} />
                  Q3 2025: Expand EpicChain community through strategic partnerships and developer outreach programs 
                </React.Fragment>,
              )}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}
