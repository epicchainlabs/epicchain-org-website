import * as React from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeroContainer from 'docs/src/layouts/HeroContainer';
import IconImage from 'docs/src/components/icon/IconImage';
import GradientText from 'docs/src/components/typography/GradientText';
import ROUTES from 'docs/src/route';
import GetStartedButtons from 'docs/src/components/home/GetStartedButtons';
import { Link } from '@mui/docs/Link';

const BaseUIThemesDemo = dynamic(() => import('./BaseUIThemesDemo'), {
  ssr: false,
  loading: function Loading() {
    return (
      <Box
        sx={[
          (theme) => ({
            width: 338,
            height: 557,
            borderRadius: '12px',
            bgcolor: 'grey.100',
            ...theme.applyDarkStyles({
              bgcolor: 'primaryDark.800',
            }),
          }),
        ]}
      />
    );
  },
});

export default function BaseUIHero() {
  return (
    <HeroContainer
      linearGradient
      disableMobileHidden
      disableTabExclusion
      left={
        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, ml: { xl: '-40px' } }}>
          <Typography
            fontWeight="bold"
            variant="body2"
            sx={(theme) => ({
              color: 'primary.600',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              justifyContent: { xs: 'center', md: 'flex-start' },
              ...theme.applyDarkStyles({
                color: 'primary.300',
              }),
            })}
          >
          </Typography>

          <Typography
            variant="h1"
            sx={{
              my: 2,
              maxWidth: { xs: 500, md: 'unset' },
              minWidth: { lg: 650 },
              position: 'relative',
              zIndex: 1,
            }}
          >
            EpicChain <GradientText>Decentralized </GradientText> Governance <br />
            Framework
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 500 }}>
          EpicChain's Decentralized Governance Framework empowers the community to participate in the decision-making processes of the ecosystem.
          </Typography>
          <GetStartedButtons
            primaryUrl={ROUTES.baseDocs}
            secondaryUrl={ROUTES.baseQuickstart}
          />
        </Box>
      }
      right={
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            py: { xs: 9, sm: 2 },
            px: 2,
            display: 'flex',
            '& > div': { margin: 'auto' },
          }}
        >
          <BaseUIThemesDemo />
        </Box>
      }
    />
  );
}
